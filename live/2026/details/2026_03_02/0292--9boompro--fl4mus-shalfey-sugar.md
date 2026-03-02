### Roster Details<br />
Team Name: 9BOOMPRO<br />
Roster: FL4MUS, shalfey, sugaR<br />
Global Rank: [292](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [175]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  517.4<br />
<br />
Final Rank Value (517.4) = Starting Rank Value (503.4) + Head To Head Adjustments (14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.4
- 400 + ( ( 0.055 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 503.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2603 | 2025-11-17 | Partizan | L   | 0.501      | -            | -                | -                | -         |    -3.33 | FL4MUS, forkyz, shalfey, sugaR, zorte |
|            4 |     3225 | 2025-10-28 | Sangal   | L   | 0.368      | -            | -                | -                | -         |    -0.60 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            3 |     3266 | 2025-10-27 | HAVU     | W   | 0.361      | 0.384        | 0.012 (0.002)    | 0.531 (0.074)    | 0 (0.000) |    10.73 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            2 |     3382 | 2025-10-25 | Phantom  | W   | 0.347      | 0.384        | 0.001 (0.000)    | 0.053 (0.007)    | 0 (0.000) |     7.97 | FL4MUS, Krad, shalfey, sugaR, zorte   |
|            1 |     3439 | 2025-10-24 | JiJieHao | L   | 0.341      | -            | -                | -                | -         |    -0.78 | FL4MUS, Krad, shalfey, sugaR, zorte   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
