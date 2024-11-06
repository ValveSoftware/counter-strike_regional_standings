### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Global Rank: [184](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_06.md)<br />
Regional Rank: [52]( ../../standings_americas_2024_11_06.md)<br />
<br />
Final Rank Value:  626.8<br />
<br />
Final Rank Value (626.8) = Starting Rank Value (628.5) + Head To Head Adjustments (-1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.5
- 400 + ( ( 0.116 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 628.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3852 | 2024-06-13 | E-Xolos LAZER | L   | 0.228      | -            | -                | -                | -         |    -2.17 | Lake, micro, Seb, Tender, wiz |
|           15 |     4207 | 2024-06-05 | LAG           | L   | 0.175      | -            | -                | -                | -         |    -2.83 | Lake, micro, Seb, Tender, wiz |
|           14 |     4250 | 2024-06-04 | LAG           | L   | 0.170      | -            | -                | -                | -         |    -2.79 | Lake, micro, Seb, Tender, wiz |
|           13 |     4561 | 2024-05-22 | MIGHT         | W   | 0.083      | 0.477        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.78 | Lake, micro, Seb, Tender, wiz |
|           12 |     4568 | 2024-05-22 | MIGHT         | W   | 0.083      | 0.477        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.78 | Lake, micro, Seb, Tender, wiz |
|           11 |     4614 | 2024-05-21 | Legacy        | L   | 0.076      | -            | -                | -                | -         |    -0.30 | Lake, micro, Seb, Tender, wiz |
|           10 |     4618 | 2024-05-21 | Wildcard      | L   | 0.075      | -            | -                | -                | -         |    -0.19 | Lake, micro, Seb, Tender, wiz |
|            9 |     4624 | 2024-05-21 | Wildcard      | L   | 0.075      | -            | -                | -                | -         |    -0.19 | Lake, micro, Seb, Tender, wiz |
|            8 |     4648 | 2024-05-20 | BOSS          | W   | 0.069      | 0.477        | 0.029 (0.001)    | 0.383 (0.013)    | 0 (0.000) |     1.71 | Lake, micro, Seb, Tender, wiz |
|            7 |     4652 | 2024-05-20 | BOSS          | L   | 0.069      | -            | -                | -                | -         |    -0.48 | Lake, micro, Seb, Tender, wiz |
|            6 |     4774 | 2024-05-16 | Take Flyte    | W   | 0.043      | 0.477        | 0.003 (0.000)    | 0.244 (0.005)    | 0 (0.000) |     0.95 | Lake, micro, Seb, Tender, wiz |
|            5 |     4775 | 2024-05-16 | Take Flyte    | W   | 0.043      | 0.477        | 0.003 (0.000)    | 0.244 (0.005)    | 0 (0.000) |     0.95 | Lake, micro, Seb, Tender, wiz |
|            4 |     4812 | 2024-05-15 | Nouns         | W   | 0.036      | 0.477        | 0.035 (0.001)    | 0.618 (0.011)    | 0 (0.000) |     1.04 | Lake, micro, Seb, Tender, wiz |
|            3 |     4817 | 2024-05-15 | Nouns         | W   | 0.036      | 0.477        | 0.035 (0.001)    | 0.618 (0.011)    | 0 (0.000) |     1.03 | Lake, micro, Seb, Tender, wiz |
|            2 |     4868 | 2024-05-14 | LAG           | L   | 0.029      | -            | -                | -                | -         |    -0.48 | Lake, micro, Seb, Tender, wiz |
|            1 |     4875 | 2024-05-14 | LAG           | W   | 0.029      | 0.477        | 0.001 (0.000)    | 0.030 (0.000)    | 0 (0.000) |     0.45 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($406.08)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
