### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Global Rank: [166](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_23.md)<br />
Regional Rank: [47]( ../../standings_americas_2024_10_23.md)<br />
<br />
Final Rank Value:  673.1<br />
<br />
Final Rank Value (673.1) = Starting Rank Value (668.3) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 668.3
- 400 + ( ( 0.137 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 668.3


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
|           16 |     3581 | 2024-06-13 | E-Xolos LAZER | L   | 0.320      | -            | -                | -                | -         |    -3.11 | Lake, micro, Seb, Tender, wiz |
|           15 |     3936 | 2024-06-05 | LAG           | L   | 0.268      | -            | -                | -                | -         |    -4.56 | Lake, micro, Seb, Tender, wiz |
|           14 |     3979 | 2024-06-04 | LAG           | L   | 0.262      | -            | -                | -                | -         |    -4.57 | Lake, micro, Seb, Tender, wiz |
|           13 |     4290 | 2024-05-22 | MIGHT         | W   | 0.175      | 0.477        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.41 | Lake, micro, Seb, Tender, wiz |
|           12 |     4297 | 2024-05-22 | MIGHT         | W   | 0.175      | 0.477        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.42 | Lake, micro, Seb, Tender, wiz |
|           11 |     4343 | 2024-05-21 | Legacy        | L   | 0.168      | -            | -                | -                | -         |    -0.85 | Lake, micro, Seb, Tender, wiz |
|           10 |     4347 | 2024-05-21 | Wildcard      | L   | 0.167      | -            | -                | -                | -         |    -0.37 | Lake, micro, Seb, Tender, wiz |
|            9 |     4353 | 2024-05-21 | Wildcard      | L   | 0.167      | -            | -                | -                | -         |    -0.37 | Lake, micro, Seb, Tender, wiz |
|            8 |     4377 | 2024-05-20 | BOSS          | W   | 0.162      | 0.477        | 0.055 (0.004)    | 0.402 (0.031)    | 0 (0.000) |     3.95 | Lake, micro, Seb, Tender, wiz |
|            7 |     4381 | 2024-05-20 | BOSS          | L   | 0.161      | -            | -                | -                | -         |    -1.14 | Lake, micro, Seb, Tender, wiz |
|            6 |     4503 | 2024-05-16 | Take Flyte    | W   | 0.135      | 0.477        | 0.006 (0.000)    | 0.258 (0.017)    | 0 (0.000) |     2.94 | Lake, micro, Seb, Tender, wiz |
|            5 |     4504 | 2024-05-16 | Take Flyte    | W   | 0.135      | 0.477        | 0.006 (0.000)    | 0.258 (0.017)    | 0 (0.000) |     2.96 | Lake, micro, Seb, Tender, wiz |
|            4 |     4541 | 2024-05-15 | Nouns         | W   | 0.128      | 0.477        | 0.074 (0.005)    | 0.646 (0.040)    | 0 (0.000) |     3.74 | Lake, micro, Seb, Tender, wiz |
|            3 |     4546 | 2024-05-15 | Nouns         | W   | 0.128      | 0.477        | 0.074 (0.005)    | 0.646 (0.040)    | 0 (0.000) |     3.74 | Lake, micro, Seb, Tender, wiz |
|            2 |     4597 | 2024-05-14 | LAG           | L   | 0.122      | -            | -                | -                | -         |    -2.08 | Lake, micro, Seb, Tender, wiz |
|            1 |     4604 | 2024-05-14 | LAG           | W   | 0.121      | 0.477        | 0.003 (0.000)    | 0.044 (0.003)    | 0 (0.000) |     1.76 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($590.53)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
