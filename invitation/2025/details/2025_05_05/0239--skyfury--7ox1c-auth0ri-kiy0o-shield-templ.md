### Roster Details<br />
Team Name: SkyFury<br />
Roster: 7oX1C, auth0ri, Kiy0o, shield, Templ<br />
Global Rank: [239](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [134]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  537.8<br />
<br />
Final Rank Value (537.8) = Starting Rank Value (545.1) + Head To Head Adjustments (-7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 545.1
- 400 + ( ( 0.080 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 545.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      188 | 2025-04-20 | NOVAQ       | L   | 1.000      | -            | -                | -                | -         |    -8.99 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            4 |      238 | 2025-04-17 | NAVI Junior | L   | 1.000      | -            | -                | -                | -         |    -1.59 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            3 |      327 | 2025-04-14 | CYBERSHOKE  | L   | 1.000      | -            | -                | -                | -         |    -4.17 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            2 |      356 | 2025-04-12 | Nexus       | W   | 1.000      | 0.435        | 0.097 (0.042)    | 0.548 (0.238)    | 0 (0.000) |    26.47 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            1 |      948 | 2025-03-22 | Betera      | L   | 0.906      | -            | -                | -                | -         |   -19.00 | 7oX1C, auth0ri, Br4tkO, shield, Templ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
