### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [128](../standings_global.md)<br />
Regional Rank: [34]( ../standings_americas.md)<br />
Final Rank Value:  773.8<br />
<br />
Final Rank Value (773.8) = Starting Rank Value (800.1) + Head To Head Adjustments (-26.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.1
- 400 + ( ( 0.197 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 800.1


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
|           44 |      119 | 2024-06-13 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -15.62 | Lake, micro, Seb, Tender, wiz |
|           43 |      474 | 2024-06-05 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -12.23 | Lake, micro, Seb, Tender, wiz |
|           42 |      517 | 2024-06-04 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -13.32 | Lake, micro, Seb, Tender, wiz |
|           41 |      830 | 2024-05-22 | MIGHT            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.03 | Lake, micro, Seb, Tender, wiz |
|           40 |      837 | 2024-05-22 | MIGHT            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.38 | Lake, micro, Seb, Tender, wiz |
|           39 |      883 | 2024-05-21 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -5.01 | Lake, micro, Seb, Tender, wiz |
|           38 |      887 | 2024-05-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -8.24 | Lake, micro, Seb, Tender, wiz |
|           37 |      893 | 2024-05-21 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -8.84 | Lake, micro, Seb, Tender, wiz |
|           36 |      917 | 2024-05-20 | BOSS             | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.386 (0.184)    | 0 (0.000) |    16.25 | Lake, micro, Seb, Tender, wiz |
|           35 |      921 | 2024-05-20 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -15.21 | Lake, micro, Seb, Tender, wiz |
|           34 |     1043 | 2024-05-16 | One More         | W   | 0.985      | 0.477        | 0.003 (0.001)    | 0.224 (0.105)    | 0 (0.000) |    10.58 | Lake, micro, Seb, Tender, wiz |
|           33 |     1044 | 2024-05-16 | One More         | W   | 0.984      | 0.477        | 0.003 (0.001)    | 0.224 (0.105)    | 0 (0.000) |    11.46 | Lake, micro, Seb, Tender, wiz |
|           32 |     1081 | 2024-05-15 | Nouns            | W   | 0.978      | 0.477        | 0.081 (0.038)    | 0.504 (0.235)    | 0 (0.000) |    22.19 | Lake, micro, Seb, Tender, wiz |
|           31 |     1086 | 2024-05-15 | Nouns            | W   | 0.978      | 0.477        | 0.081 (0.038)    | 0.504 (0.235)    | 0 (0.000) |    23.70 | Lake, micro, Seb, Tender, wiz |
|           30 |     1137 | 2024-05-14 | LAG              | L   | 0.971      | -            | -                | -                | -         |   -11.04 | Lake, micro, Seb, Tender, wiz |
|           29 |     1144 | 2024-05-14 | LAG              | W   | 0.971      | 0.477        | 0.021 (0.010)    | 0.421 (0.195)    | 0 (0.000) |    19.94 | Lake, micro, Seb, Tender, wiz |
|           28 |     1931 | 2024-04-11 | Mythic           | W   | 0.751      | 0.477        | 0.013 (0.005)    | 0.377 (0.135)    | 0 (0.000) |    15.43 | arcade, Lake, micro, Seb, wiz |
|           27 |     1934 | 2024-04-11 | Mythic           | L   | 0.751      | -            | -                | -                | -         |    -8.20 | arcade, Lake, micro, Seb, wiz |
|           26 |     2021 | 2024-04-09 | NRG              | L   | 0.738      | -            | -                | -                | -         |    -6.44 | arcade, Lake, micro, Seb, wiz |
|           25 |     2024 | 2024-04-09 | NRG              | L   | 0.738      | -            | -                | -                | -         |    -6.79 | arcade, Lake, micro, Seb, wiz |
|           24 |     2148 | 2024-04-04 | Take Flyte       | L   | 0.705      | -            | -                | -                | -         |   -10.12 | arcade, Lake, micro, Seb, wiz |
|           23 |     2154 | 2024-04-04 | Take Flyte       | L   | 0.704      | -            | -                | -                | -         |   -10.77 | arcade, Lake, micro, Seb, wiz |
|           22 |     2328 | 2024-03-27 | Party Astronauts | L   | 0.652      | -            | -                | -                | -         |    -4.75 | arcade, Lake, micro, Seb, wiz |
|           21 |     2332 | 2024-03-27 | Party Astronauts | L   | 0.651      | -            | -                | -                | -         |    -4.96 | arcade, Lake, micro, Seb, wiz |
|           20 |     2547 | 2024-03-15 | Elevate          | L   | 0.572      | -            | -                | -                | -         |    -6.25 | arcade, Lake, micro, Seb, wiz |
|           19 |     2549 | 2024-03-15 | Elevate          | L   | 0.571      | -            | -                | -                | -         |    -6.54 | arcade, Lake, micro, Seb, wiz |
|           18 |     2609 | 2024-03-13 | Party Astronauts | L   | 0.557      | -            | -                | -                | -         |    -4.68 | arcade, Lake, micro, Seb, wiz |
|           17 |     2646 | 2024-03-12 | NRG              | W   | 0.551      | 0.143        | 0.024 (0.002)    | -                | 0 (0.000) |    11.09 | arcade, Lake, micro, Seb, wiz |
|           16 |     2781 | 2024-03-06 | Limitless        | W   | 0.512      | 0.477        | 0.001 (0.000)    | 0.227 (0.055)    | -         |     5.79 | arcade, Lake, micro, Seb, wiz |
|           15 |     2784 | 2024-03-06 | Limitless        | W   | 0.511      | 0.477        | -                | 0.227 (0.055)    | -         |     6.03 | arcade, Lake, micro, Seb, wiz |
|           14 |     3276 | 2024-02-14 | Rocket           | W   | 0.372      | -            | -                | -                | -         |     2.58 | arcade, Lake, micro, Seb, wiz |
|           13 |     3278 | 2024-02-14 | Rocket           | L   | 0.371      | -            | -                | -                | -         |    -9.28 | arcade, Lake, micro, Seb, wiz |
|           12 |     3315 | 2024-02-13 | FLUFFY AIMERS    | W   | 0.365      | 0.477        | 0.016 (0.003)    | 0.311 (0.054)    | -         |     6.88 | arcade, Lake, micro, Seb, wiz |
|           11 |     3319 | 2024-02-13 | FLUFFY AIMERS    | L   | 0.365      | -            | -                | -                | -         |    -4.69 | arcade, Lake, micro, Seb, wiz |
|           10 |     3479 | 2024-02-02 | Party Astronauts | L   | 0.291      | -            | -                | -                | -         |    -2.41 | arcade, Lake, Seb, Walco, wiz |
|            9 |     3486 | 2024-02-02 | Wildcard         | L   | 0.290      | -            | -                | -                | -         |    -2.33 | arcade, Lake, Seb, Walco, wiz |
|            8 |     3862 | 2024-01-18 | Rocket           | L   | 0.191      | -            | -                | -                | -         |    -4.83 | Lake, Seb, Walco, wiz, Wolffe |
|            7 |     3914 | 2024-01-17 | LOS              | W   | 0.184      | -            | -                | -                | -         |     0.59 | Lake, Seb, Walco, wiz, Wolffe |
|            6 |     4009 | 2024-01-15 | MIGHT            | L   | 0.171      | -            | -                | -                | -         |    -4.24 | Lake, Seb, Walco, wiz, Wolffe |
|            5 |     4036 | 2024-01-14 | Nouns            | L   | 0.165      | -            | -                | -                | -         |    -1.47 | Lake, Seb, Walco, wiz, Wolffe |
|            4 |     4046 | 2024-01-14 | Akimbo           | W   | 0.164      | -            | -                | -                | -         |     1.93 | Lake, Seb, Walco, wiz, Wolffe |
|            3 |     4066 | 2024-01-13 | Rocket           | L   | 0.157      | -            | -                | -                | -         |    -4.06 | Lake, Seb, Walco, wiz, Wolffe |
|            2 |     4102 | 2024-01-12 | Party Astronauts | L   | 0.152      | -            | -                | -                | -         |    -1.26 | Lake, Seb, Walco, wiz, Wolffe |
|            1 |     4108 | 2024-01-12 | LOS              | W   | 0.152      | -            | -                | -                | -         |     0.46 | Lake, Seb, Walco, wiz, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
