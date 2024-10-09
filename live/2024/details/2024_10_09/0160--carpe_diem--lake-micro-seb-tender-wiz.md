### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Global Rank: [160](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [44]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  684.4<br />
<br />
Final Rank Value (684.4) = Starting Rank Value (676.6) + Head To Head Adjustments (7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.6
- 400 + ( ( 0.143 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 676.6


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
|           16 |     3306 | 2024-06-13 | E-Xolos LAZER | L   | 0.414      | -            | -                | -                | -         |    -4.79 | Lake, micro, Seb, Tender, wiz |
|           15 |     3661 | 2024-06-05 | LAG           | L   | 0.362      | -            | -                | -                | -         |    -6.29 | Lake, micro, Seb, Tender, wiz |
|           14 |     3704 | 2024-06-04 | LAG           | L   | 0.357      | -            | -                | -                | -         |    -6.40 | Lake, micro, Seb, Tender, wiz |
|           13 |     4015 | 2024-05-22 | MIGHT         | W   | 0.270      | 0.477        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.02 | Lake, micro, Seb, Tender, wiz |
|           12 |     4022 | 2024-05-22 | MIGHT         | W   | 0.269      | 0.477        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.05 | Lake, micro, Seb, Tender, wiz |
|           11 |     4068 | 2024-05-21 | Legacy        | L   | 0.262      | -            | -                | -                | -         |    -1.77 | Lake, micro, Seb, Tender, wiz |
|           10 |     4072 | 2024-05-21 | Wildcard      | L   | 0.262      | -            | -                | -                | -         |    -0.74 | Lake, micro, Seb, Tender, wiz |
|            9 |     4078 | 2024-05-21 | Wildcard      | L   | 0.261      | -            | -                | -                | -         |    -0.74 | Lake, micro, Seb, Tender, wiz |
|            8 |     4102 | 2024-05-20 | BOSS          | W   | 0.256      | 0.477        | 0.041 (0.005)    | 0.383 (0.047)    | 0 (0.000) |     5.53 | Lake, micro, Seb, Tender, wiz |
|            7 |     4106 | 2024-05-20 | BOSS          | L   | 0.256      | -            | -                | -                | -         |    -2.56 | Lake, micro, Seb, Tender, wiz |
|            6 |     4228 | 2024-05-16 | Take Flyte    | W   | 0.230      | 0.477        | 0.004 (0.000)    | 0.272 (0.030)    | 0 (0.000) |     4.72 | Lake, micro, Seb, Tender, wiz |
|            5 |     4229 | 2024-05-16 | Take Flyte    | W   | 0.229      | 0.477        | 0.004 (0.000)    | 0.272 (0.030)    | 0 (0.000) |     4.80 | Lake, micro, Seb, Tender, wiz |
|            4 |     4266 | 2024-05-15 | Nouns         | W   | 0.223      | 0.477        | 0.062 (0.007)    | 0.614 (0.065)    | 0 (0.000) |     6.35 | Lake, micro, Seb, Tender, wiz |
|            3 |     4271 | 2024-05-15 | Nouns         | W   | 0.223      | 0.477        | 0.062 (0.007)    | 0.614 (0.065)    | 0 (0.000) |     6.39 | Lake, micro, Seb, Tender, wiz |
|            2 |     4322 | 2024-05-14 | LAG           | L   | 0.216      | -            | -                | -                | -         |    -3.78 | Lake, micro, Seb, Tender, wiz |
|            1 |     4329 | 2024-05-14 | LAG           | W   | 0.216      | 0.477        | 0.004 (0.000)    | 0.058 (0.006)    | 0 (0.000) |     3.06 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($779.26)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
