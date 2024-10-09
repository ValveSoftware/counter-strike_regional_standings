### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Global Rank: [167](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [47]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  663.6<br />
<br />
Final Rank Value (663.6) = Starting Rank Value (646.6) + Head To Head Adjustments (17.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.6
- 400 + ( ( 0.128 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 646.6


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
|           19 |     3299 | 2024-06-13 | Mythic           | L   | 0.416      | -            | -                | -                | -         |    -4.77 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     3471 | 2024-06-08 | Homyno           | W   | 0.383      | 0.371        | 0.006 (0.001)    | 0.121 (0.017)    | 0 (0.000) |     5.88 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     3527 | 2024-06-07 | Wildcard         | L   | 0.376      | -            | -                | -                | -         |    -0.91 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     3611 | 2024-06-06 | Vibe             | W   | 0.367      | 0.371        | 0.000 (0.000)    | 0.024 (0.003)    | 0 (0.000) |     3.44 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     3652 | 2024-06-05 | NRG              | L   | 0.363      | -            | -                | -                | -         |    -2.32 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     3661 | 2024-06-05 | Carpe Diem       | W   | 0.362      | 0.384        | 0.003 (0.000)    | 0.040 (0.006)    | 0 (0.000) |     6.29 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     3704 | 2024-06-04 | Carpe Diem       | W   | 0.357      | 0.477        | 0.003 (0.000)    | 0.040 (0.007)    | 0 (0.000) |     6.40 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     3713 | 2024-06-04 | Retirement Home  | W   | 0.355      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.23 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     4018 | 2024-05-22 | Limitless        | W   | 0.269      | 0.477        | 0.001 (0.000)    | 0.043 (0.006)    | 0 (0.000) |     3.81 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     4021 | 2024-05-22 | Limitless        | W   | 0.269      | 0.477        | 0.001 (0.000)    | 0.043 (0.006)    | 0 (0.000) |     3.90 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     4024 | 2024-05-22 | Wildcard         | L   | 0.269      | -            | -                | -                | -         |    -0.56 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     4268 | 2024-05-15 | NRG              | L   | 0.223      | -            | -                | -                | -         |    -1.28 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     4276 | 2024-05-15 | NRG              | L   | 0.223      | -            | -                | -                | -         |    -1.29 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     4322 | 2024-05-14 | Carpe Diem       | W   | 0.216      | 0.477        | 0.003 (0.000)    | 0.040 (0.004)    | 0 (0.000) |     3.78 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     4329 | 2024-05-14 | Carpe Diem       | L   | 0.216      | -            | -                | -                | -         |    -3.06 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     4464 | 2024-05-09 | M80              | L   | 0.183      | -            | -                | -                | -         |    -0.11 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     4469 | 2024-05-09 | M80              | L   | 0.183      | -            | -                | -                | -         |    -0.11 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     4483 | 2024-05-08 | Party Astronauts | L   | 0.176      | -            | -                | -                | -         |    -2.15 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     4488 | 2024-05-08 | Party Astronauts | L   | 0.176      | -            | -                | -                | -         |    -2.18 | based, Experative, nicx, Nyyx, ogwizard |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,168.89)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
