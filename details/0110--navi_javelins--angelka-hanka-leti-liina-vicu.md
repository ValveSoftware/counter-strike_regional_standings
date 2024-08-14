### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Global Rank: [110](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
<br />
Final Rank Value:  822.0<br />
<br />
Final Rank Value (822.0) = Starting Rank Value (788.6) + Head To Head Adjustments (33.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.079[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.6
- 400 + ( ( 0.197 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 788.6


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
|           20 |     1915 | 2024-06-01 | panelinha         | L   | 0.707      | -            | -                | -                | -         |   -11.18 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |     1947 | 2024-05-31 | TSM Shimmer       | W   | 0.701      | 0.524        | 0.019 (0.007)    | 0.176 (0.065)    | 1 (0.701) |     7.38 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |     1960 | 2024-05-31 | Let Her Cook      | L   | 0.700      | -            | -                | -                | -         |    -9.77 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |     2270 | 2024-05-19 | Imperial fe       | W   | 0.619      | 0.281        | 0.122 (0.021)    | 0.269 (0.047)    | 0 (0.000) |    14.17 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |     2276 | 2024-05-19 | BIG EQUIPA        | W   | 0.618      | 0.281        | 0.016 (0.003)    | 0.121 (0.021)    | 0 (0.000) |     8.10 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     2306 | 2024-05-18 | Spirit fe         | W   | 0.612      | 0.281        | 0.005 (0.001)    | 0.129 (0.022)    | 0 (0.000) |     5.13 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     3041 | 2024-04-19 | Crescent fe       | W   | 0.420      | 0.331        | 0.004 (0.001)    | 0.075 (0.010)    | 0 (0.000) |     3.72 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     3168 | 2024-04-16 | Imperial fe       | W   | 0.400      | 0.303        | 0.122 (0.015)    | 0.269 (0.033)    | 0 (0.000) |     9.52 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     3189 | 2024-04-15 | NIP Impact        | W   | 0.393      | 0.303        | 0.007 (0.001)    | 0.205 (0.024)    | 0 (0.000) |     4.94 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     3207 | 2024-04-14 | Astralis W        | W   | 0.385      | -            | -                | -                | 0 (0.000) |     3.08 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     3220 | 2024-04-13 | Imperial fe       | L   | 0.378      | -            | -                | -                | -         |    -2.84 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     3261 | 2024-04-11 | Spirit fe         | W   | 0.366      | 0.303        | 0.005 (0.001)    | 0.129 (0.014)    | 0 (0.000) |     3.55 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     3362 | 2024-04-09 | NIP Impact        | L   | 0.352      | -            | -                | -                | -         |    -6.79 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     3484 | 2024-04-04 | Spirit fe         | W   | 0.320      | 0.331        | 0.005 (0.001)    | 0.129 (0.014)    | 0 (0.000) |     3.18 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     3523 | 2024-04-03 | Let Her Cook      | L   | 0.313      | -            | -                | -                | -         |    -3.71 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     3900 | 2024-03-14 | 1WIN Gang         | W   | 0.180      | -            | -                | -                | -         |     1.70 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     4102 | 2024-03-06 | Fearless Cheetahs | W   | 0.127      | 0.331        | -                | 0.053 (0.002)    | -         |     1.31 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     4323 | 2024-02-25 | BIG EQUIPA        | W   | 0.059      | 0.238        | 0.016 (0.000)    | -                | -         |     0.81 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     4327 | 2024-02-25 | ENCE Athena       | W   | 0.058      | -            | -                | -                | -         |     0.53 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     4361 | 2024-02-24 | Crescent fe       | W   | 0.052      | -            | -                | -                | -         |     0.52 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,671.48)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.714 | $7,000.00      | $4,996.86       |
| 2024-05-19 |      0.619 | $2,000.00      | $1,238.34       |
| 2024-04-16 |      0.400 | $3,500.00      | $1,399.08       |
| 2024-02-25 |      0.059 | $630.00        | $37.20          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
