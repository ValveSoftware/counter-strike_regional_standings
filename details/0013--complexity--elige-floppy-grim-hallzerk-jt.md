### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [13](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1560.7<br />
<br />
Final Rank Value (1560.7) = Starting Rank Value (1645.9) + Head To Head Adjustments (-85.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.668[<sup>1</sup>](#table2)
- Bounty Collected: 0.590[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.929[<sup>2</sup>](#table1)

The average of these factors is 0.603<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1645.9
- 400 + ( ( 0.603 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1645.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       62 | 2024-07-30 | OG            | W   | 1.000      | 0.581        | 0.144 (0.084)    | -                | 1 (1.000) |     1.50 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |       93 | 2024-07-29 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |   -15.26 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |      470 | 2024-07-18 | M80           | L   | 1.000      | -            | -                | -                | -         |   -27.02 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      519 | 2024-07-17 | Virtus.pro    | L   | 1.000      | -            | -                | -                | -         |   -12.22 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      852 | 2024-06-16 | Falcons       | W   | 0.899      | 0.500        | 0.208 (0.093)    | -                | 1 (0.899) |     8.65 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      861 | 2024-06-16 | Aurora        | W   | 0.897      | 0.500        | 0.433 (0.194)    | 0.800 (0.359)    | 1 (0.897) |     8.19 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      891 | 2024-06-15 | MIBR          | W   | 0.891      | 0.500        | 0.202 (0.090)    | 0.610 (0.272)    | 1 (0.891) |     7.35 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      926 | 2024-06-14 | ENCE          | L   | 0.885      | -            | -                | -                | -         |   -21.85 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      936 | 2024-06-14 | Alliance      | W   | 0.884      | -            | -                | -                | 1 (0.884) |     0.41 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     1260 | 2024-06-06 | FURIA         | L   | 0.832      | -            | -                | -                | -         |   -13.60 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     1279 | 2024-06-06 | BetBoom       | L   | 0.831      | -            | -                | -                | -         |   -20.54 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1290 | 2024-06-06 | fnatic        | L   | 0.830      | -            | -                | -                | -         |   -19.14 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1329 | 2024-06-05 | BIG           | W   | 0.825      | 0.715        | 0.133 (0.078)    | 0.300 (0.177)    | 1 (0.825) |     2.82 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1343 | 2024-06-05 | Eternal Fire  | W   | 0.823      | 0.715        | 0.759 (0.447)    | 0.462 (0.272)    | 1 (0.823) |    14.81 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1564 | 2024-05-27 | MOUZ          | L   | 0.768      | -            | -                | -                | -         |    -4.57 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1576 | 2024-05-27 | Liquid        | L   | 0.766      | -            | -                | -                | -         |   -17.07 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2067 | 2024-05-11 | MOUZ          | L   | 0.660      | -            | -                | -                | -         |    -4.56 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2121 | 2024-05-09 | Virtus.pro    | W   | 0.645      | 0.889        | 0.483 (0.277)    | 0.327 (0.188)    | 1 (0.645) |    11.43 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2188 | 2024-05-05 | Natus Vincere | W   | 0.620      | 0.889        | 1.000 (0.551)    | 0.331 (0.183)    | 1 (0.620) |    16.99 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2254 | 2024-05-02 | HEROIC        | W   | 0.599      | 0.889        | 0.210 (0.112)    | 0.382 (0.204)    | 1 (0.599) |     8.20 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2303 | 2024-04-30 | PERA          | W   | 0.585      | 0.889        | -                | 0.452 (0.235)    | -         |     0.31 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3226 | 2024-03-24 | FaZe          | L   | 0.338      | -            | -                | -                | -         |    -4.18 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3235 | 2024-03-23 | Vitality      | L   | 0.333      | -            | -                | -                | -         |    -2.56 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3250 | 2024-03-22 | MOUZ          | L   | 0.325      | -            | -                | -                | -         |    -2.15 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3268 | 2024-03-21 | HEROIC        | W   | 0.320      | 1.000        | -                | 0.382 (0.122)    | -         |     4.37 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3277 | 2024-03-21 | paiN          | W   | 0.318      | 1.000        | 0.305 (0.097)    | 0.796 (0.253)    | -         |     2.35 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3590 | 2024-03-07 | OG            | L   | 0.227      | -            | -                | -                | -         |    -6.94 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3682 | 2024-03-04 | Liquid        | W   | 0.207      | -            | -                | -                | -         |     1.67 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3697 | 2024-03-03 | FURIA         | L   | 0.201      | -            | -                | -                | -         |    -2.28 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3736 | 2024-03-02 | BOSS          | W   | 0.192      | -            | -                | -                | -         |     0.06 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3755 | 2024-03-01 | Elevate       | W   | 0.186      | -            | -                | -                | -         |     0.16 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4242 | 2024-02-05 | Falcons       | L   | 0.020      | -            | -                | -                | -         |    -0.47 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4263 | 2024-02-04 | Spirit        | L   | 0.012      | -            | -                | -                | -         |    -0.07 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4283 | 2024-02-03 | Apeks         | W   | 0.006      | -            | -                | -                | -         |     0.00 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($104,848.15)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      0.899 | $50,000.00     | $44,927.59      |
| 2024-06-09 |      0.852 | $8,000.00      | $6,819.67       |
| 2024-06-02 |      0.807 | $4,000.00      | $3,227.52       |
| 2024-05-12 |      0.666 | $45,000.00     | $29,957.96      |
| 2024-03-31 |      0.387 | $20,000.00     | $7,730.31       |
| 2024-03-10 |      0.247 | $5,000.00      | $1,234.35       |
| 2024-02-11 |      0.059 | $16,000.00     | $950.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
