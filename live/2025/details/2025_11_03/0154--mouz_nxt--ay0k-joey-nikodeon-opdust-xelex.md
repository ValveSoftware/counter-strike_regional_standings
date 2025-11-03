### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: ay0k, Joey, Nikodeon, opdust, xelex<br />
Global Rank: [154](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [99]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  684.7<br />
<br />
Final Rank Value (684.7) = Starting Rank Value (646.2) + Head To Head Adjustments (38.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.197[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.2
- 400 + ( ( 0.131 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 646.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       94 | 2025-10-27 | Phantom    | L   | 1.000      | -            | -                | -                | -         |    -8.48 | ay0k, Joey, Nikodeon, opdust, xelex |
|            9 |      106 | 2025-10-26 | Dziuseppe  | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.357 (0.051)    | 0 (0.000) |    18.22 | ay0k, Joey, Nikodeon, opdust, xelex |
|            8 |      146 | 2025-10-25 | kONO       | L   | 1.000      | -            | -                | -                | -         |    -6.08 | ay0k, Joey, Nikodeon, opdust, xelex |
|            7 |      917 | 2025-09-30 | BIG        | L   | 0.973      | -            | -                | -                | -         |    -1.00 | ay0k, Joey, Nikodeon, opdust, xelex |
|            6 |      925 | 2025-09-30 | AaB        | W   | 0.972      | 0.323        | 0.002 (0.001)    | 0.314 (0.099)    | 1 (0.972) |    20.36 | ay0k, Joey, Nikodeon, opdust, xelex |
|            5 |      930 | 2025-09-30 | EYEBALLERS | L   | 0.972      | -            | -                | -                | -         |    -3.27 | ay0k, Joey, Nikodeon, opdust, xelex |
|            4 |      942 | 2025-09-30 | OG         | W   | 0.971      | 0.323        | 0.096 (0.030)    | 0.892 (0.280)    | 1 (0.971) |    30.05 | ay0k, Joey, Nikodeon, opdust, xelex |
|            3 |     1098 | 2025-09-26 | ESC        | L   | 0.947      | -            | -                | -                | -         |    -1.07 | ay0k, Joey, Nikodeon, opdust, xelex |
|            2 |     1120 | 2025-09-26 | Wildcard   | L   | 0.945      | -            | -                | -                | -         |    -2.49 | ay0k, Joey, Nikodeon, opdust, xelex |
|            1 |     2480 | 2025-08-12 | UNiTY      | L   | 0.645      | -            | -                | -                | -         |    -7.77 | ay0k, Joey, Nikodeon, opdust, xelex |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
