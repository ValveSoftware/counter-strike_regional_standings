### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: aloneintokyo, KusMe, Something<br />
Global Rank: [309](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [197]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  562.4<br />
<br />
Final Rank Value (562.4) = Starting Rank Value (535.0) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.0
- 400 + ( ( 0.072 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 535.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4441 | 2026-03-03 | BET-M    | L   | 0.366      | -            | -                | -                | -         |    -0.52 | aloneintokyo, Goody, KusMe, maloii, Something  |
|            5 |     4452 | 2026-03-03 | K27      | L   | 0.365      | -            | -                | -                | -         |    -0.26 | aloneintokyo, KusMe, maloii, Something, spirit |
|            4 |     4482 | 2026-03-02 | Ursa     | W   | 0.360      | 0.333        | 0.013 (0.002)    | 0.903 (0.108)    | 0 (0.000) |     9.70 | aloneintokyo, floyd, Goody, KusMe, Something   |
|            3 |     4491 | 2026-03-02 | ex-RUBY  | W   | 0.359      | 0.371        | 0.037 (0.005)    | 1.000 (0.133)    | 0 (0.000) |    10.22 | aloneintokyo, floyd, KusMe, Something, spirit  |
|            2 |     4731 | 2026-02-25 | Oxuji    | L   | 0.326      | -            | -                | -                | -         |    -0.29 | aloneintokyo, floyd, KusMe, Something, spirit  |
|            1 |     4949 | 2026-02-21 | ex-RUBY  | W   | 0.299      | 0.371        | 0.037 (0.004)    | 1.000 (0.111)    | 0 (0.000) |     8.55 | aloneintokyo, floyd, KusMe, Something, spirit  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
