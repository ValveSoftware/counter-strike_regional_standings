### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  1019.8<br />
<br />
Final Rank Value (1019.8) = Starting Rank Value (1040.8) + Head To Head Adjustments (-21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.264[<sup>2</sup>](#table1)

The average of these factors is 0.304<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1040.8
- 400 + ( ( 0.304 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1040.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |        9 | 2024-07-11 | ALTERNATE aTTaX | W   | 1.000      | 0.371        | 0.050 (0.018)    | 0.577 (0.214)    | 0 (0.000) |    11.28 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |      136 | 2024-06-18 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -19.92 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |      140 | 2024-06-17 | EXO             | W   | 1.000      | 0.333        | 0.019 (0.006)    | 0.139 (0.046)    | 0 (0.000) |     7.13 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |      168 | 2024-06-16 | Verdant         | W   | 1.000      | 0.333        | -                | 0.327 (0.109)    | 0 (0.000) |     8.25 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |      711 | 2024-06-03 | Enterprise      | L   | 0.945      | -            | -                | -                | -         |   -17.14 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |      722 | 2024-06-02 | Czech Republic  | L   | 0.940      | -            | -                | -                | -         |    -9.92 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |      728 | 2024-06-02 | SINNERS         | W   | 0.939      | 0.346        | 0.057 (0.019)    | 0.767 (0.249)    | 1 (0.939) |    16.39 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |      735 | 2024-06-02 | Passion UA      | L   | 0.938      | -            | -                | -                | -         |   -13.82 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |      753 | 2024-06-01 | Czech Republic  | L   | 0.933      | -            | -                | -                | -         |   -10.52 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |      790 | 2024-05-31 | SINNERS         | W   | 0.926      | 0.346        | 0.057 (0.018)    | 0.767 (0.246)    | 1 (0.926) |    16.92 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |      799 | 2024-05-31 | Johnny Speeds   | W   | 0.924      | 0.371        | 0.158 (0.054)    | 0.825 (0.283)    | 0 (0.000) |    24.77 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |      844 | 2024-05-29 | Rebels          | W   | 0.912      | 0.371        | 0.053 (0.018)    | 0.551 (0.186)    | 0 (0.000) |    17.74 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |      856 | 2024-05-28 | GL Academy      | L   | 0.907      | -            | -                | -                | -         |   -21.45 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |      926 | 2024-05-25 | Serbia          | L   | 0.885      | -            | -                | -                | -         |   -21.16 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |      952 | 2024-05-23 | SINNERS         | L   | 0.873      | -            | -                | -                | -         |   -12.86 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     1045 | 2024-05-21 | Rebels          | W   | 0.858      | 0.371        | 0.053 (0.017)    | 0.551 (0.175)    | 0 (0.000) |    15.63 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     1331 | 2024-05-13 | Johnny Speeds   | L   | 0.806      | -            | -                | -                | -         |    -3.52 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     1933 | 2024-04-18 | Johnny Speeds   | L   | 0.639      | -            | -                | -                | -         |    -2.71 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     1970 | 2024-04-17 | Viperio         | W   | 0.631      | -            | -                | -                | 0 (0.000) |     2.11 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     2006 | 2024-04-16 | Lilmix          | W   | 0.624      | 0.333        | 0.034 (0.007)    | -                | -         |     6.76 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     2035 | 2024-04-14 | Sashi           | L   | 0.611      | -            | -                | -                | -         |    -7.06 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     2141 | 2024-04-10 | SINNERS         | L   | 0.585      | -            | -                | -                | -         |    -6.65 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     2269 | 2024-04-06 | Sashi           | L   | 0.558      | -            | -                | -                | -         |    -6.77 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     2280 | 2024-04-05 | Czech Republic  | W   | 0.552      | 0.333        | 0.104 (0.019)    | 0.493 (0.091)    | -         |    12.36 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     2326 | 2024-04-04 | Sashi           | L   | 0.545      | -            | -                | -                | -         |    -6.64 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     2405 | 2024-04-02 | Illuminar       | W   | 0.532      | -            | -                | -                | -         |     2.16 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     2657 | 2024-03-17 | SINNERS         | L   | 0.426      | -            | -                | -                | -         |    -5.72 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     2672 | 2024-03-16 | Czech Republic  | L   | 0.420      | -            | -                | -                | -         |    -4.13 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     2688 | 2024-03-15 | SINNERS         | W   | 0.414      | 0.345        | 0.057 (0.008)    | 0.767 (0.109)    | 1 (0.414) |     7.50 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,999.93)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-02 |      0.940 | $3,048.00      | $2,864.35       |
| 2024-04-18 |      0.639 | $3,000.00      | $1,915.54       |
| 2024-04-06 |      0.558 | $3,000.00      | $1,673.62       |
| 2024-03-17 |      0.427 | $1,279.00      | $546.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
