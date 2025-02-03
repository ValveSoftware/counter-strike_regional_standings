### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Global Rank: [166](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_03.md)<br />
Regional Rank: [47]( ../../standings_americas_2025_02_03.md)<br />
<br />
Final Rank Value:  680.9<br />
<br />
Final Rank Value (680.9) = Starting Rank Value (674.1) + Head To Head Adjustments (6.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.366[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.1
- 400 + ( ( 0.141 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 674.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3182 | 2024-08-29 | Nouns         | L   | 0.149      | -            | -                | -                | -         |    -0.49 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           14 |     3186 | 2024-08-29 | Wildcard      | L   | 0.148      | -            | -                | -                | -         |    -0.10 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           13 |     3297 | 2024-08-27 | FLUFFY AIMERS | L   | 0.135      | -            | -                | -                | -         |    -1.00 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           12 |     3352 | 2024-08-26 | Nouns         | L   | 0.128      | -            | -                | -                | -         |    -0.43 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           11 |     3363 | 2024-08-26 | USA           | W   | 0.127      | 0.143        | 0.000 (0.000)    | 0.017 (0.000)    | 0 (0.000) |     0.96 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           10 |     3633 | 2024-08-19 | FLUFFY AIMERS | W   | 0.082      | 0.143        | 0.015 (0.000)    | 0.365 (0.004)    | 0 (0.000) |     1.98 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            9 |     3638 | 2024-08-19 | InControl     | W   | 0.081      | 0.143        | 0.006 (0.000)    | 0.034 (0.000)    | 0 (0.000) |     1.13 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            8 |     3683 | 2024-08-17 | Getting Info  | W   | 0.068      | 0.143        | 0.027 (0.000)    | 0.423 (0.004)    | 0 (0.000) |     1.69 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            7 |     3688 | 2024-08-17 | E-Xolos LAZER | W   | 0.068      | 0.143        | 0.008 (0.000)    | 0.137 (0.001)    | 0 (0.000) |     1.10 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            6 |     3713 | 2024-08-16 | Getting Info  | L   | 0.062      | -            | -                | -                | -         |    -0.43 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            5 |     3729 | 2024-08-15 | USA           | W   | 0.056      | 0.371        | 0.000 (0.000)    | 0.017 (0.000)    | 0 (0.000) |     0.43 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            4 |     3732 | 2024-08-15 | Getting Info  | W   | 0.055      | 0.143        | 0.027 (0.000)    | 0.423 (0.003)    | 0 (0.000) |     1.36 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            3 |     3736 | 2024-08-15 | E-Xolos LAZER | W   | 0.055      | 0.143        | 0.008 (0.000)    | 0.137 (0.001)    | 0 (0.000) |     0.89 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            2 |     3784 | 2024-08-13 | Nouns         | L   | 0.042      | -            | -                | -                | -         |    -0.14 | ben1337, cxzi, FaNg, Infinite, WolfY |
|            1 |     3787 | 2024-08-13 | Nouns         | L   | 0.042      | -            | -                | -                | -         |    -0.14 | ben1337, cxzi, FaNg, Infinite, WolfY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,524.20)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.495 | $7,000.00      | $3,467.11       |
| 2024-08-18 |      0.076 | $750.00        | $57.09          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
