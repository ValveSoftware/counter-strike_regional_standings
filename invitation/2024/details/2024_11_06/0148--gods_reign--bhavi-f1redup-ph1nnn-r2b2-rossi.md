### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, Rossi<br />
Global Rank: [148](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_06.md)<br />
Regional Rank: [12]( ../../standings_asia_2024_11_06.md)<br />
<br />
Final Rank Value:  709.5<br />
<br />
Final Rank Value (709.5) = Starting Rank Value (724.6) + Head To Head Adjustments (-15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.6
- 400 + ( ( 0.165 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 724.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |        7 | 2024-11-06 | Clutch         | L   | 1.000      | -            | -                | -                | -         |   -20.45 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi         |
|           22 |       10 | 2024-11-05 | The Huns       | L   | 1.000      | -            | -                | -                | -         |   -19.24 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi         |
|           21 |      206 | 2024-10-27 | Xtreme5        | W   | 1.000      | 0.262        | 0.002 (0.000)    | 0.037 (0.010)    | 0 (0.000) |     7.01 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|           20 |      207 | 2024-10-27 | st4rboys       | W   | 1.000      | 0.262        | 0.001 (0.000)    | 0.033 (0.009)    | 0 (0.000) |    10.03 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|           19 |      320 | 2024-10-20 | True Rippers   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.122 (0.017)    | 1 (1.000) |    10.98 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|           18 |      450 | 2024-10-15 | SGGT           | L   | 1.000      | -            | -                | -                | -         |   -19.33 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|           17 |     1179 | 2024-09-22 | st4rboys       | W   | 0.898      | 0.262        | 0.001 (0.000)    | 0.033 (0.008)    | 0 (0.000) |     9.43 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn      |
|           16 |     1181 | 2024-09-22 | True Rippers   | W   | 0.897      | 0.262        | 0.000 (0.000)    | 0.122 (0.029)    | 0 (0.000) |    10.31 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn      |
|           15 |     1818 | 2024-08-30 | Alter Ego      | L   | 0.746      | -            | -                | -                | -         |   -15.77 | Bhavi, f1redup, Mcg!LLzZz, Ph1NNN, reV3nnnn |
|           14 |     1824 | 2024-08-30 | True Rippers   | W   | 0.745      | 0.143        | 0.000 (0.000)    | 0.122 (0.013)    | 0 (0.000) |     8.70 | Bhavi, f1redup, Mcg!LLzZz, Ph1NNN, reV3nnnn |
|           13 |     1872 | 2024-08-29 | Alter Ego      | L   | 0.739      | -            | -                | -                | -         |   -16.27 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|           12 |     1926 | 2024-08-28 | AK BARS        | W   | 0.732      | 0.143        | 0.005 (0.001)    | -                | 0 (0.000) |     7.72 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|           11 |     1939 | 2024-08-28 | ONi            | W   | 0.731      | 0.143        | -                | 0.081 (0.008)    | 0 (0.000) |     4.29 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|           10 |     2329 | 2024-08-18 | Victores Sumus | W   | 0.665      | 0.262        | 0.001 (0.000)    | -                | 0 (0.000) |     4.89 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|            9 |     3252 | 2024-07-21 | Xtreme5        | W   | 0.478      | 0.262        | 0.002 (0.000)    | 0.037 (0.005)    | 0 (0.000) |     3.61 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|            8 |     3692 | 2024-06-30 | True Rippers   | W   | 0.338      | 0.262        | -                | 0.122 (0.011)    | -         |     4.09 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn      |
|            7 |     3694 | 2024-06-29 | LOT            | W   | 0.337      | -            | -                | -                | -         |     1.53 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|            6 |     3698 | 2024-06-29 | True Rippers   | L   | 0.333      | -            | -                | -                | -         |    -6.63 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|            5 |     3699 | 2024-06-29 | Marcos         | W   | 0.332      | -            | -                | -                | -         |     2.15 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|            4 |     3705 | 2024-06-28 | Xtreme5        | W   | 0.325      | 0.143        | 0.002 (0.000)    | -                | -         |     2.53 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|            3 |     3710 | 2024-06-27 | True Rippers   | L   | 0.320      | -            | -                | -                | -         |    -6.51 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |
|            2 |     4506 | 2024-05-26 | True Rippers   | W   | 0.105      | 0.262        | -                | 0.122 (0.003)    | -         |     1.17 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn      |
|            1 |     4508 | 2024-05-26 | Marcos         | W   | 0.104      | -            | -                | -                | -         |     0.67 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,284.28)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-10-18 |      1.000 | $800.00        | $800.00         |
| 2024-09-22 |      0.898 | $1,000.00      | $897.88         |
| 2024-08-18 |      0.665 | $1,000.00      | $665.05         |
| 2024-07-21 |      0.478 | $1,000.00      | $478.08         |
| 2024-06-30 |      0.338 | $1,000.00      | $338.13         |
| 2024-05-26 |      0.105 | $1,000.00      | $105.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
