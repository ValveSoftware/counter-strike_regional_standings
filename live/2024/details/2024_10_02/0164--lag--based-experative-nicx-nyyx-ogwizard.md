### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Global Rank: [164](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [46]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  664.7<br />
<br />
Final Rank Value (664.7) = Starting Rank Value (648.1) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.1
- 400 + ( ( 0.130 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 648.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |     3079 | 2024-06-13 | Mythic           | L   | 0.462      | -            | -                | -                | -         |    -5.48 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     3251 | 2024-06-08 | Homyno           | W   | 0.428      | 0.371        | 0.005 (0.001)    | 0.133 (0.021)    | 0 (0.000) |     6.51 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     3307 | 2024-06-07 | Wildcard         | L   | 0.422      | -            | -                | -                | -         |    -1.95 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     3391 | 2024-06-06 | Vibe             | W   | 0.413      | 0.371        | 0.000 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     3.81 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     3432 | 2024-06-05 | NRG              | L   | 0.409      | -            | -                | -                | -         |    -2.81 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     3441 | 2024-06-05 | Carpe Diem       | W   | 0.408      | 0.384        | 0.003 (0.000)    | 0.050 (0.008)    | 0 (0.000) |     7.02 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     3484 | 2024-06-04 | Carpe Diem       | W   | 0.402      | 0.477        | 0.003 (0.001)    | 0.050 (0.010)    | 0 (0.000) |     7.18 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     3493 | 2024-06-04 | Retirement Home  | W   | 0.401      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.51 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     3798 | 2024-05-22 | Limitless        | W   | 0.315      | 0.477        | 0.001 (0.000)    | 0.051 (0.008)    | 0 (0.000) |     4.23 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     3801 | 2024-05-22 | Limitless        | W   | 0.315      | 0.477        | 0.001 (0.000)    | 0.051 (0.008)    | 0 (0.000) |     4.34 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     3804 | 2024-05-22 | Wildcard         | L   | 0.315      | -            | -                | -                | -         |    -1.31 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     4048 | 2024-05-15 | NRG              | L   | 0.268      | -            | -                | -                | -         |    -1.63 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     4056 | 2024-05-15 | NRG              | L   | 0.268      | -            | -                | -                | -         |    -1.65 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     4102 | 2024-05-14 | Carpe Diem       | W   | 0.262      | 0.477        | 0.003 (0.000)    | 0.050 (0.006)    | 0 (0.000) |     4.57 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     4109 | 2024-05-14 | Carpe Diem       | L   | 0.261      | -            | -                | -                | -         |    -3.73 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     4244 | 2024-05-09 | M80              | L   | 0.228      | -            | -                | -                | -         |    -0.20 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     4249 | 2024-05-09 | M80              | L   | 0.228      | -            | -                | -                | -         |    -0.20 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     4263 | 2024-05-08 | Party Astronauts | L   | 0.222      | -            | -                | -                | -         |    -2.66 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     4268 | 2024-05-08 | Party Astronauts | L   | 0.221      | -            | -                | -                | -         |    -2.70 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     4930 | 2024-04-10 | Mythic           | W   | 0.035      | 0.477        | 0.005 (0.000)    | 0.294 (0.005)    | 0 (0.000) |     0.69 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     4935 | 2024-04-10 | Mythic           | W   | 0.035      | 0.477        | 0.005 (0.000)    | 0.294 (0.005)    | 0 (0.000) |     0.69 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     4985 | 2024-04-09 | BOSS             | L   | 0.028      | -            | -                | -                | -         |    -0.30 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     4988 | 2024-04-09 | BOSS             | L   | 0.028      | -            | -                | -                | -         |    -0.30 | based, Experative, nicx, Nyyx, ogwizard |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,305.55)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
