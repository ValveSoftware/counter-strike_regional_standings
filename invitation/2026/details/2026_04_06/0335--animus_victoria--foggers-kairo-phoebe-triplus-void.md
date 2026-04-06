### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, kairo, phoebe, TRIPLUS, void<br />
Global Rank: [335](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [41]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  478.9<br />
<br />
Final Rank Value (478.9) = Starting Rank Value (483.1) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.1
- 400 + ( ( 0.042 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 483.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4016 | 2025-12-06 | Rooster           | L   | 0.397      | -            | -                | -                | -         |    -1.28 | foggers, kairo, phoebe, TRIPLUS, void |
|            7 |     4017 | 2025-12-06 | FURY              | L   | 0.397      | -            | -                | -                | -         |    -6.01 | foggers, kairo, phoebe, TRIPLUS, void |
|            6 |     4476 | 2025-11-20 | LITE              | L   | 0.285      | -            | -                | -                | -         |    -3.13 | foggers, kairo, phoebe, TRIPLUS, void |
|            5 |     4500 | 2025-11-18 | THUNDER dOWNUNDER | L   | 0.272      | -            | -                | -                | -         |    -0.09 | foggers, kairo, phoebe, TRIPLUS, void |
|            4 |     4528 | 2025-11-16 | Time Waves        | W   | 0.259      | 0.314        | 0.000 (0.000)    | 0.091 (0.007)    | 0 (0.000) |     3.49 | foggers, kairo, phoebe, TRIPLUS, void |
|            3 |     5297 | 2025-10-25 | Mindfreak         | L   | 0.112      | -            | -                | -                | -         |    -0.22 | foggers, gump, kairo, phoebe, void    |
|            2 |     5367 | 2025-10-24 | Arcade            | W   | 0.105      | 0.278        | 0.004 (0.000)    | 0.279 (0.008)    | 0 (0.000) |     3.06 | foggers, gump, kairo, phoebe, void    |
|            1 |     5412 | 2025-10-23 | SemperFi          | L   | 0.099      | -            | -                | -                | -         |    -0.04 | foggers, gump, kairo, phoebe, void    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
