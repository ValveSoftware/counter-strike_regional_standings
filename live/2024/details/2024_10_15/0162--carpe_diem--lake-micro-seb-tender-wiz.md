### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Global Rank: [162](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [45]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  677.3<br />
<br />
Final Rank Value (677.3) = Starting Rank Value (670.6) + Head To Head Adjustments (6.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.6
- 400 + ( ( 0.139 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 670.6


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
|           16 |     3403 | 2024-06-13 | E-Xolos LAZER | L   | 0.375      | -            | -                | -                | -         |    -4.27 | Lake, micro, Seb, Tender, wiz |
|           15 |     3758 | 2024-06-05 | LAG           | L   | 0.322      | -            | -                | -                | -         |    -5.56 | Lake, micro, Seb, Tender, wiz |
|           14 |     3801 | 2024-06-04 | LAG           | L   | 0.317      | -            | -                | -                | -         |    -5.62 | Lake, micro, Seb, Tender, wiz |
|           13 |     4112 | 2024-05-22 | MIGHT         | W   | 0.230      | 0.477        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     1.80 | Lake, micro, Seb, Tender, wiz |
|           12 |     4119 | 2024-05-22 | MIGHT         | W   | 0.230      | 0.477        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     1.82 | Lake, micro, Seb, Tender, wiz |
|           11 |     4165 | 2024-05-21 | Legacy        | L   | 0.223      | -            | -                | -                | -         |    -1.45 | Lake, micro, Seb, Tender, wiz |
|           10 |     4169 | 2024-05-21 | Wildcard      | L   | 0.222      | -            | -                | -                | -         |    -0.60 | Lake, micro, Seb, Tender, wiz |
|            9 |     4175 | 2024-05-21 | Wildcard      | L   | 0.222      | -            | -                | -                | -         |    -0.60 | Lake, micro, Seb, Tender, wiz |
|            8 |     4199 | 2024-05-20 | BOSS          | W   | 0.216      | 0.477        | 0.039 (0.004)    | 0.409 (0.042)    | 0 (0.000) |     4.96 | Lake, micro, Seb, Tender, wiz |
|            7 |     4203 | 2024-05-20 | BOSS          | L   | 0.216      | -            | -                | -                | -         |    -1.87 | Lake, micro, Seb, Tender, wiz |
|            6 |     4325 | 2024-05-16 | Take Flyte    | W   | 0.190      | 0.477        | 0.005 (0.000)    | 0.267 (0.024)    | 0 (0.000) |     4.04 | Lake, micro, Seb, Tender, wiz |
|            5 |     4326 | 2024-05-16 | Take Flyte    | W   | 0.190      | 0.477        | 0.005 (0.000)    | 0.267 (0.024)    | 0 (0.000) |     4.09 | Lake, micro, Seb, Tender, wiz |
|            4 |     4363 | 2024-05-15 | Nouns         | W   | 0.183      | 0.477        | 0.057 (0.005)    | 0.635 (0.056)    | 0 (0.000) |     5.22 | Lake, micro, Seb, Tender, wiz |
|            3 |     4368 | 2024-05-15 | Nouns         | W   | 0.183      | 0.477        | 0.057 (0.005)    | 0.635 (0.055)    | 0 (0.000) |     5.25 | Lake, micro, Seb, Tender, wiz |
|            2 |     4419 | 2024-05-14 | LAG           | L   | 0.176      | -            | -                | -                | -         |    -3.05 | Lake, micro, Seb, Tender, wiz |
|            1 |     4426 | 2024-05-14 | LAG           | W   | 0.176      | 0.477        | 0.003 (0.000)    | 0.052 (0.004)    | 0 (0.000) |     2.53 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($700.02)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
