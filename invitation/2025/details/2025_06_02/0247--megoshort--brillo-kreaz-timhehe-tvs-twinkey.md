### Roster Details<br />
Team Name: megoshort<br />
Roster: Brillo, kreaz, TIMhehe, tvs, Twinkey<br />
Global Rank: [247](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [132]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  501.5<br />
<br />
Final Rank Value (501.5) = Starting Rank Value (486.1) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.1
- 400 + ( ( 0.047 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 486.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      533 | 2025-05-04 | Alliance   | L   | 1.000      | -            | -                | -                | -         |    -3.64 | Brillo, kreaz, TIMhehe, tvs, Twinkey  |
|            4 |      537 | 2025-05-04 | EYEBALLERS | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.106 (0.015)    | 0 (0.000) |    22.21 | Brillo, kreaz, TIMhehe, tvs, Twinkey  |
|            3 |      569 | 2025-05-03 | Alliance   | L   | 1.000      | -            | -                | -                | -         |    -2.63 | Brillo, kreaz, TIMhehe, tvs, Twinkey  |
|            2 |     3590 | 2024-12-21 | Betclic    | L   | 0.117      | -            | -                | -                | -         |    -0.14 | Brillo, robiin, Silence, TIMhehe, tvs |
|            1 |     3603 | 2024-12-20 | 500        | L   | 0.110      | -            | -                | -                | -         |    -0.32 | Brillo, mogv, Silence, TIMhehe, tvs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
