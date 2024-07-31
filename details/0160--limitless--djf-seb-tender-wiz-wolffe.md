### Roster Details<br />
Team Name: Limitless<br />
Roster: DJF, Seb, Tender, wiz, Wolffe<br />
Global Rank: [160](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
<br />
Final Rank Value:  687.8<br />
<br />
Final Rank Value (687.8) = Starting Rank Value (753.6) + Head To Head Adjustments (-65.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.6
- 400 + ( ( 0.171 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 753.6


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
|           26 |      229 | 2024-07-24 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -9.27 | DJF, Seb, Tender, wiz, Wolffe |
|           25 |      233 | 2024-07-24 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -9.99 | DJF, Seb, Tender, wiz, Wolffe |
|           24 |      261 | 2024-07-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -5.47 | DJF, Seb, Tender, wiz, Wolffe |
|           23 |      263 | 2024-07-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -5.76 | DJF, Seb, Tender, wiz, Wolffe |
|           22 |      495 | 2024-07-17 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -6.14 | DJF, Seb, Tender, wiz, Wolffe |
|           21 |      498 | 2024-07-17 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -6.50 | DJF, Seb, Tender, wiz, Wolffe |
|           20 |      554 | 2024-07-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -6.06 | DJF, Seb, Tender, wiz, Wolffe |
|           19 |      558 | 2024-07-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -6.41 | DJF, Seb, Tender, wiz, Wolffe |
|           18 |      605 | 2024-07-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.49 | DJF, Seb, Tender, wiz, Wolffe |
|           17 |      608 | 2024-07-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.00 | DJF, Seb, Tender, wiz, Wolffe |
|           16 |      949 | 2024-06-13 | E-Xolos LAZER    | L   | 0.880      | -            | -                | -                | -         |   -13.06 | Lake, micro, Seb, Tender, wiz |
|           15 |     1304 | 2024-06-05 | LAG              | L   | 0.827      | -            | -                | -                | -         |   -10.56 | Lake, micro, Seb, Tender, wiz |
|           14 |     1347 | 2024-06-04 | LAG              | L   | 0.822      | -            | -                | -                | -         |   -11.27 | Lake, micro, Seb, Tender, wiz |
|           13 |     1658 | 2024-05-22 | MIGHT            | W   | 0.735      | 0.477        | 0.000 (0.000)    | 0.062 (0.022)    | 0 (0.000) |     4.14 | Lake, micro, Seb, Tender, wiz |
|           12 |     1665 | 2024-05-22 | MIGHT            | W   | 0.735      | 0.477        | 0.000 (0.000)    | 0.062 (0.022)    | 0 (0.000) |     4.30 | Lake, micro, Seb, Tender, wiz |
|           11 |     1711 | 2024-05-21 | Legacy           | L   | 0.728      | -            | -                | -                | -         |    -5.14 | Lake, micro, Seb, Tender, wiz |
|           10 |     1715 | 2024-05-21 | Wildcard         | L   | 0.727      | -            | -                | -                | -         |    -6.80 | Lake, micro, Seb, Tender, wiz |
|            9 |     1721 | 2024-05-21 | Wildcard         | L   | 0.727      | -            | -                | -                | -         |    -7.18 | Lake, micro, Seb, Tender, wiz |
|            8 |     1745 | 2024-05-20 | BOSS             | W   | 0.721      | 0.477        | 0.014 (0.005)    | 0.334 (0.115)    | 0 (0.000) |    11.35 | Lake, micro, Seb, Tender, wiz |
|            7 |     1749 | 2024-05-20 | BOSS             | L   | 0.721      | -            | -                | -                | -         |   -11.58 | Lake, micro, Seb, Tender, wiz |
|            6 |     1871 | 2024-05-16 | Take Flyte       | W   | 0.695      | 0.477        | 0.002 (0.001)    | 0.241 (0.080)    | 0 (0.000) |     7.68 | Lake, micro, Seb, Tender, wiz |
|            5 |     1872 | 2024-05-16 | Take Flyte       | W   | 0.695      | 0.477        | 0.002 (0.001)    | 0.241 (0.080)    | 0 (0.000) |     8.12 | Lake, micro, Seb, Tender, wiz |
|            4 |     1909 | 2024-05-15 | Nouns            | W   | 0.688      | 0.477        | 0.058 (0.019)    | 0.546 (0.179)    | 0 (0.000) |    14.94 | Lake, micro, Seb, Tender, wiz |
|            3 |     1914 | 2024-05-15 | Nouns            | W   | 0.688      | 0.477        | 0.058 (0.019)    | 0.546 (0.179)    | 0 (0.000) |    15.72 | Lake, micro, Seb, Tender, wiz |
|            2 |     1965 | 2024-05-14 | LAG              | L   | 0.681      | -            | -                | -                | -         |    -8.59 | Lake, micro, Seb, Tender, wiz |
|            1 |     1972 | 2024-05-14 | LAG              | W   | 0.681      | 0.477        | 0.013 (0.004)    | 0.344 (0.112)    | 0 (0.000) |    13.20 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,710.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
