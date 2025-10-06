### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: ay0k, Joey, Nikodeon, opdust, xelex<br />
Global Rank: [152](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [94]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  700.3<br />
<br />
Final Rank Value (700.3) = Starting Rank Value (666.4) + Head To Head Adjustments (34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.4
- 400 + ( ( 0.136 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 666.4


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
|            7 |       96 | 2025-09-30 | BIG        | L   | 1.000      | -            | -                | -                | -         |    -1.14 | ay0k, Joey, Nikodeon, opdust, xelex |
|            6 |      102 | 2025-09-30 | AaB        | W   | 1.000      | 0.323        | 0.002 (0.001)    | 0.279 (0.090)    | 1 (1.000) |    20.74 | ay0k, Joey, Nikodeon, opdust, xelex |
|            5 |      106 | 2025-09-30 | EYEBALLERS | L   | 1.000      | -            | -                | -                | -         |    -3.00 | ay0k, Joey, Nikodeon, opdust, xelex |
|            4 |      116 | 2025-09-30 | OG         | W   | 1.000      | 0.323        | 0.132 (0.043)    | 1.000 (0.323)    | 1 (1.000) |    31.05 | ay0k, Joey, Nikodeon, opdust, xelex |
|            3 |      264 | 2025-09-26 | ESC        | L   | 1.000      | -            | -                | -                | -         |    -1.03 | ay0k, Joey, Nikodeon, opdust, xelex |
|            2 |      284 | 2025-09-26 | Wildcard   | L   | 1.000      | -            | -                | -                | -         |    -1.70 | ay0k, Joey, Nikodeon, opdust, xelex |
|            1 |     1580 | 2025-08-12 | UNiTY      | L   | 0.833      | -            | -                | -                | -         |   -10.93 | ay0k, Joey, Nikodeon, opdust, xelex |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
