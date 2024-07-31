### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Global Rank: [8](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1687.4<br />
<br />
Final Rank Value (1687.4) = Starting Rank Value (1724.6) + Head To Head Adjustments (-37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.760[<sup>1</sup>](#table2)
- Bounty Collected: 0.636[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 0.875[<sup>2</sup>](#table1)

The average of these factors is 0.642<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1724.6
- 400 + ( ( 0.642 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1724.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |        4 | 2024-07-31 | Liquid        | L   | 1.000      | -            | -                | -                | -         |   -23.03 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |      374 | 2024-07-20 | G2            | L   | 1.000      | -            | -                | -                | -         |    -6.22 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |      414 | 2024-07-19 | Vitality      | W   | 1.000      | 1.000        | 0.592 (0.592)    | 0.385 (0.385)    | 1 (1.000) |    21.60 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |      519 | 2024-07-17 | Complexity    | W   | 1.000      | 1.000        | 0.319 (0.319)    | 0.367 (0.367)    | 1 (1.000) |    12.22 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |      872 | 2024-06-15 | Natus Vincere | L   | 0.893      | -            | -                | -                | -         |    -5.40 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           32 |      909 | 2024-06-14 | Astralis      | W   | 0.887      | 0.729        | 0.360 (0.233)    | 0.386 (0.249)    | 1 (0.887) |    14.27 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           31 |      948 | 2024-06-13 | Spirit        | L   | 0.880      | -            | -                | -                | -         |    -5.68 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           30 |      983 | 2024-06-12 | Vitality      | W   | 0.873      | 0.729        | 0.592 (0.377)    | 0.385 (0.245)    | 1 (0.873) |    20.20 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           29 |     1531 | 2024-05-29 | BIG           | L   | 0.780      | -            | -                | -                | -         |   -22.41 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           28 |     1546 | 2024-05-28 | FaZe          | L   | 0.774      | -            | -                | -                | -         |    -9.46 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           27 |     1569 | 2024-05-27 | HEROIC        | W   | 0.767      | 0.624        | 0.210 (0.100)    | 0.382 (0.183)    | 1 (0.767) |     8.23 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           26 |     1859 | 2024-05-17 | Falcons       | L   | 0.698      | -            | -                | -                | -         |   -17.70 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           25 |     1899 | 2024-05-16 | MOUZ          | L   | 0.691      | -            | -                | -                | -         |    -5.15 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           24 |     1999 | 2024-05-14 | Falcons       | W   | 0.679      | 0.769        | 0.208 (0.108)    | -                | 1 (0.679) |     3.78 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           23 |     2121 | 2024-05-09 | Complexity    | L   | 0.645      | -            | -                | -                | -         |   -11.43 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           22 |     2137 | 2024-05-08 | The MongolZ   | W   | 0.640      | 0.889        | 1.000 (0.569)    | 0.719 (0.409)    | 1 (0.640) |    15.27 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           21 |     2156 | 2024-05-07 | GamerLegion   | W   | 0.633      | 0.889        | 0.177 (0.099)    | -                | 1 (0.633) |     0.95 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           20 |     2344 | 2024-04-28 | SAW           | W   | 0.572      | 0.889        | -                | 0.545 (0.277)    | 1 (0.572) |     1.13 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           19 |     2374 | 2024-04-27 | fnatic        | W   | 0.565      | 0.889        | 0.374 (0.188)    | 0.633 (0.318)    | 1 (0.565) |     5.32 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           18 |     2416 | 2024-04-25 | FaZe          | L   | 0.553      | -            | -                | -                | -         |    -7.59 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           17 |     2440 | 2024-04-24 | SAW           | W   | 0.545      | 0.889        | -                | 0.545 (0.264)    | -         |     0.92 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           16 |     2461 | 2024-04-23 | fnatic        | L   | 0.538      | -            | -                | -                | -         |   -12.07 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           15 |     2758 | 2024-04-12 | G2            | L   | 0.463      | -            | -                | -                | -         |    -2.70 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     2839 | 2024-04-10 | Astralis      | L   | 0.450      | -            | -                | -                | -         |    -7.53 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     2894 | 2024-04-09 | FlyQuest      | W   | 0.443      | -            | -                | -                | -         |     0.69 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     2924 | 2024-04-08 | Wildcard      | W   | 0.436      | -            | -                | -                | -         |     0.03 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3224 | 2024-03-24 | G2            | L   | 0.339      | -            | -                | -                | -         |    -1.97 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3238 | 2024-03-23 | Eternal Fire  | L   | 0.332      | -            | -                | -                | -         |    -5.07 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3256 | 2024-03-22 | HEROIC        | W   | 0.324      | -            | -                | -                | -         |     3.28 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3269 | 2024-03-21 | paiN          | W   | 0.319      | 1.000        | 0.305 (0.098)    | 0.796 (0.254)    | -         |     1.60 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3280 | 2024-03-21 | Imperial      | L   | 0.318      | -            | -                | -                | -         |    -9.22 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3481 | 2024-03-12 | HEROIC        | W   | 0.260      | -            | -                | -                | -         |     2.50 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3496 | 2024-03-11 | Apeks         | W   | 0.254      | -            | -                | -                | -         |     0.09 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     3507 | 2024-03-11 | B8            | W   | 0.252      | -            | -                | -                | -         |     0.23 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     4089 | 2024-02-15 | Natus Vincere | W   | 0.086      | -            | -                | -                | -         |     2.20 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     4121 | 2024-02-14 | fnatic        | W   | 0.080      | -            | -                | -                | -         |     0.79 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     4139 | 2024-02-14 | SAW           | W   | 0.077      | -            | -                | -                | -         |     0.11 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($158,808.89)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.48) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $85,000.00     | $85,000.00      |
| 2024-06-16 |      0.899 | $40,000.00     | $35,964.65      |
| 2024-06-02 |      0.807 | $5,000.00      | $4,034.40       |
| 2024-05-12 |      0.666 | $32,000.00     | $21,303.44      |
| 2024-04-14 |      0.478 | $10,000.00     | $4,776.10       |
| 2024-03-31 |      0.387 | $20,000.00     | $7,730.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
