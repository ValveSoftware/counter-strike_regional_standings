### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1728.1<br />
<br />
Final Rank Value (1728.1) = Starting Rank Value (1814.6) + Head To Head Adjustments (-86.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.737[<sup>1</sup>](#table2)
- Bounty Collected: 0.651[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.671<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1814.6
- 400 + ( ( 0.671 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1814.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      158 | 2024-06-16 | Falcons           | W   | 1.000      | 0.500        | 0.352 (0.176)    | -                | 1 (1.000) |     9.68 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |      167 | 2024-06-16 | Aurora            | W   | 1.000      | 0.500        | 0.518 (0.259)    | 0.853 (0.426)    | 1 (1.000) |     5.02 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      197 | 2024-06-15 | MIBR              | W   | 1.000      | 0.500        | 0.270 (0.135)    | 0.648 (0.324)    | 1 (1.000) |     8.11 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      232 | 2024-06-14 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -27.15 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      242 | 2024-06-14 | Alliance          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.34 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      566 | 2024-06-06 | FURIA             | L   | 0.967      | -            | -                | -                | -         |   -22.61 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      585 | 2024-06-06 | BetBoom           | L   | 0.965      | -            | -                | -                | -         |   -24.45 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      596 | 2024-06-06 | fnatic            | L   | 0.964      | -            | -                | -                | -         |   -25.99 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |      635 | 2024-06-05 | BIG               | W   | 0.959      | 0.715        | 0.215 (0.147)    | 0.405 (0.278)    | 1 (0.959) |     3.46 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |      649 | 2024-06-05 | Eternal Fire      | W   | 0.958      | 0.715        | 1.000 (0.685)    | 0.430 (0.295)    | 1 (0.958) |    12.94 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |      870 | 2024-05-27 | MOUZ              | L   | 0.903      | -            | -                | -                | -         |    -7.07 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |      882 | 2024-05-27 | Liquid            | L   | 0.900      | -            | -                | -                | -         |   -20.31 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1373 | 2024-05-11 | MOUZ              | L   | 0.794      | -            | -                | -                | -         |    -7.53 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1427 | 2024-05-09 | Virtus.pro        | W   | 0.779      | 0.889        | 0.347 (0.241)    | 0.391 (0.271)    | 1 (0.779) |     9.80 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1494 | 2024-05-05 | Natus Vincere     | W   | 0.754      | 0.889        | 1.000 (0.670)    | 0.306 (0.205)    | 1 (0.754) |    15.52 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     1560 | 2024-05-02 | HEROIC            | W   | 0.733      | 0.889        | 0.338 (0.220)    | 0.480 (0.313)    | 1 (0.733) |    10.38 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     1609 | 2024-04-30 | PERA              | W   | 0.719      | 0.889        | -                | 0.433 (0.277)    | 1 (0.719) |     0.21 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2532 | 2024-03-24 | FaZe              | L   | 0.472      | -            | -                | -                | -         |    -5.33 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2541 | 2024-03-23 | Vitality          | L   | 0.467      | -            | -                | -                | -         |    -4.15 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2556 | 2024-03-22 | MOUZ              | L   | 0.459      | -            | -                | -                | -         |    -4.22 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2574 | 2024-03-21 | HEROIC            | W   | 0.454      | 1.000        | 0.338 (0.153)    | 0.480 (0.218)    | -         |     6.75 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2583 | 2024-03-21 | paiN              | W   | 0.452      | 1.000        | 0.478 (0.216)    | 0.768 (0.348)    | -         |     3.33 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     2896 | 2024-03-07 | OG                | L   | 0.361      | -            | -                | -                | -         |   -11.09 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     2988 | 2024-03-04 | Liquid            | W   | 0.342      | -            | -                | -                | -         |     2.64 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3003 | 2024-03-03 | FURIA             | L   | 0.335      | -            | -                | -                | -         |    -7.31 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3042 | 2024-03-02 | BOSS              | W   | 0.326      | -            | -                | -                | -         |     0.05 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3061 | 2024-03-01 | Elevate           | W   | 0.320      | -            | -                | -                | -         |     0.16 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3548 | 2024-02-05 | Falcons           | L   | 0.154      | -            | -                | -                | -         |    -3.77 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3569 | 2024-02-04 | Spirit            | L   | 0.146      | -            | -                | -                | -         |    -1.19 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3589 | 2024-02-03 | Apeks             | W   | 0.141      | -            | -                | -                | -         |     0.06 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3808 | 2024-01-23 | Ninjas in Pyjamas | L   | 0.066      | -            | -                | -                | -         |    -2.08 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     3836 | 2024-01-22 | Natus Vincere     | L   | 0.059      | -            | -                | -                | -         |    -0.70 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4193 | 2024-01-13 | Party Astronauts  | W   | 0.002      | -            | -                | -                | -         |     0.00 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($113,566.21)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-06-09 |      0.987 | $8,000.00      | $7,892.66       |
| 2024-06-02 |      0.941 | $4,000.00      | $3,764.01       |
| 2024-05-12 |      0.800 | $45,000.00     | $35,993.50      |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |
| 2024-03-10 |      0.381 | $5,000.00      | $1,904.96       |
| 2024-02-11 |      0.194 | $16,000.00     | $3,096.73       |
| 2024-01-28 |      0.100 | $5,000.00      | $501.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
