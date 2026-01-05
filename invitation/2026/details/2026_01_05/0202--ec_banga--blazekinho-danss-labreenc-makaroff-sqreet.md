### Roster Details<br />
Team Name: EC BANGA<br />
Roster: blazekiNho, danss, Labreenc, makaroff, sqreet<br />
Global Rank: [202](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [132]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  659.5<br />
<br />
Final Rank Value (659.5) = Starting Rank Value (630.2) + Head To Head Adjustments (29.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.212[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.2
- 400 + ( ( 0.116 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 630.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       12 | 2026-01-04 | MOUZ NXT | L   | 1.000      | -            | -                | -                | -         |    -2.54 | blazekiNho, danss, Labreenc, makaroff, sqreet |
|            4 |       15 | 2026-01-04 | OlyBet   | L   | 1.000      | -            | -                | -                | -         |    -6.97 | blazekiNho, danss, Labreenc, makaroff, sqreet |
|            3 |       18 | 2026-01-04 | SemperFi | W   | 1.000      | 0.314        | 0.015 (0.005)    | 0.323 (0.101)    | 1 (1.000) |    24.87 | blazekiNho, danss, Labreenc, makaroff, sqreet |
|            2 |       25 | 2026-01-04 | CSDIILIT | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.195 (0.061)    | 1 (1.000) |    20.42 | blazekiNho, danss, Labreenc, makaroff, sqreet |
|            1 |       28 | 2026-01-04 | ALGO     | L   | 1.000      | -            | -                | -                | -         |    -6.48 | blazekiNho, danss, Labreenc, makaroff, sqreet |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
