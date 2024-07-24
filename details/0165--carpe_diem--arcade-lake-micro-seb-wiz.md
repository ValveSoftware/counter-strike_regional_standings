### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: arcade, Lake, micro, Seb, wiz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  675.1<br />
<br />
Final Rank Value (675.1) = Starting Rank Value (685.1) + Head To Head Adjustments (-10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.1
- 400 + ( ( 0.141 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 685.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2517 | 2024-04-11 | Mythic           | W   | 0.509      | 0.477        | 0.012 (0.003)    | 0.310 (0.075)    | 0 (0.000) |    10.79 | arcade, Lake, micro, Seb, wiz |
|           19 |     2520 | 2024-04-11 | Mythic           | L   | 0.509      | -            | -                | -                | -         |    -5.28 | arcade, Lake, micro, Seb, wiz |
|           18 |     2607 | 2024-04-09 | NRG              | L   | 0.495      | -            | -                | -                | -         |    -3.83 | arcade, Lake, micro, Seb, wiz |
|           17 |     2610 | 2024-04-09 | NRG              | L   | 0.495      | -            | -                | -                | -         |    -3.96 | arcade, Lake, micro, Seb, wiz |
|           16 |     2734 | 2024-04-04 | Perseverance     | L   | 0.462      | -            | -                | -                | -         |    -5.79 | arcade, Lake, micro, Seb, wiz |
|           15 |     2740 | 2024-04-04 | Perseverance     | L   | 0.462      | -            | -                | -                | -         |    -6.02 | arcade, Lake, micro, Seb, wiz |
|           14 |     2913 | 2024-03-27 | Party Astronauts | L   | 0.409      | -            | -                | -                | -         |    -2.36 | arcade, Lake, micro, Seb, wiz |
|           13 |     2917 | 2024-03-27 | Party Astronauts | L   | 0.409      | -            | -                | -                | -         |    -2.42 | arcade, Lake, micro, Seb, wiz |
|           12 |     3132 | 2024-03-15 | Elevate          | L   | 0.329      | -            | -                | -                | -         |    -1.38 | arcade, Lake, micro, Seb, wiz |
|           11 |     3134 | 2024-03-15 | Elevate          | L   | 0.329      | -            | -                | -                | -         |    -1.40 | arcade, Lake, micro, Seb, wiz |
|           10 |     3194 | 2024-03-13 | Party Astronauts | L   | 0.315      | -            | -                | -                | -         |    -1.91 | arcade, Lake, micro, Seb, wiz |
|            9 |     3231 | 2024-03-12 | NRG              | W   | 0.309      | 0.143        | 0.025 (0.001)    | 0.574 (0.025)    | 0 (0.000) |     7.03 | arcade, Lake, micro, Seb, wiz |
|            8 |     3366 | 2024-03-06 | Limitless        | W   | 0.269      | 0.477        | 0.001 (0.000)    | 0.196 (0.025)    | 0 (0.000) |     3.93 | arcade, Lake, micro, Seb, wiz |
|            7 |     3369 | 2024-03-06 | Limitless        | W   | 0.269      | 0.477        | 0.001 (0.000)    | 0.196 (0.025)    | 0 (0.000) |     4.02 | arcade, Lake, micro, Seb, wiz |
|            6 |     3861 | 2024-02-14 | Rocket           | W   | 0.129      | 0.477        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     1.09 | arcade, Lake, micro, Seb, wiz |
|            5 |     3863 | 2024-02-14 | Rocket           | L   | 0.129      | -            | -                | -                | -         |    -3.00 | arcade, Lake, micro, Seb, wiz |
|            4 |     3900 | 2024-02-13 | FLUFFY AIMERS    | W   | 0.123      | 0.477        | 0.013 (0.001)    | 0.125 (0.007)    | 0 (0.000) |     2.46 | arcade, Lake, micro, Seb, wiz |
|            3 |     3904 | 2024-02-13 | FLUFFY AIMERS    | L   | 0.122      | -            | -                | -                | -         |    -1.41 | arcade, Lake, micro, Seb, wiz |
|            2 |     4064 | 2024-02-02 | Party Astronauts | L   | 0.048      | -            | -                | -                | -         |    -0.29 | arcade, Lake, Seb, Walco, wiz |
|            1 |     4071 | 2024-02-02 | Wildcard         | L   | 0.048      | -            | -                | -                | -         |    -0.30 | arcade, Lake, Seb, Walco, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,804.58)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
