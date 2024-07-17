### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1736.1<br />
<br />
Final Rank Value (1736.1) = Starting Rank Value (1823.0) + Head To Head Adjustments (-86.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.740[<sup>1</sup>](#table2)
- Bounty Collected: 0.641[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.663<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1823.0
- 400 + ( ( 0.663 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1823.0


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
|           32 |      322 | 2024-06-16 | Falcons           | W   | 0.993      | 0.500        | 0.344 (0.171)    | -                | 1 (0.993) |     8.53 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      331 | 2024-06-16 | Aurora            | W   | 0.992      | 0.500        | 0.514 (0.255)    | 0.813 (0.403)    | 1 (0.992) |     4.69 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      361 | 2024-06-15 | MIBR              | W   | 0.986      | 0.500        | 0.269 (0.132)    | 0.614 (0.303)    | 1 (0.986) |     7.53 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      396 | 2024-06-14 | ENCE              | L   | 0.980      | -            | -                | -                | -         |   -27.25 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      406 | 2024-06-14 | Alliance          | W   | 0.979      | -            | -                | -                | 1 (0.979) |     0.31 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      730 | 2024-06-06 | FURIA             | L   | 0.927      | -            | -                | -                | -         |   -22.21 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      749 | 2024-06-06 | BetBoom           | L   | 0.926      | -            | -                | -                | -         |   -23.89 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |      760 | 2024-06-06 | fnatic            | L   | 0.925      | -            | -                | -                | -         |   -25.09 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |      799 | 2024-06-05 | BIG               | W   | 0.919      | 0.715        | 0.212 (0.139)    | 0.382 (0.251)    | 1 (0.919) |     2.88 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |      813 | 2024-06-05 | Eternal Fire      | W   | 0.918      | 0.715        | 1.000 (0.657)    | 0.401 (0.263)    | 1 (0.918) |    11.38 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1034 | 2024-05-27 | MOUZ              | L   | 0.863      | -            | -                | -                | -         |    -6.09 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1046 | 2024-05-27 | Liquid            | L   | 0.861      | -            | -                | -                | -         |   -20.53 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1537 | 2024-05-11 | MOUZ              | L   | 0.754      | -            | -                | -                | -         |    -6.30 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1591 | 2024-05-09 | Virtus.pro        | W   | 0.740      | 0.889        | 0.349 (0.230)    | 0.367 (0.241)    | 1 (0.740) |     8.77 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     1658 | 2024-05-05 | Natus Vincere     | W   | 0.714      | 0.889        | 1.000 (0.635)    | 0.285 (0.181)    | 1 (0.714) |    13.99 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     1724 | 2024-05-02 | HEROIC            | W   | 0.693      | 0.889        | 0.333 (0.206)    | 0.448 (0.276)    | 1 (0.693) |     9.14 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     1773 | 2024-04-30 | PERA              | W   | 0.680      | 0.889        | -                | 0.454 (0.274)    | 1 (0.680) |     0.20 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2696 | 2024-03-24 | FaZe              | L   | 0.432      | -            | -                | -                | -         |    -5.09 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2705 | 2024-03-23 | Vitality          | L   | 0.427      | -            | -                | -                | -         |    -3.65 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2720 | 2024-03-22 | MOUZ              | L   | 0.420      | -            | -                | -                | -         |    -3.36 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2738 | 2024-03-21 | HEROIC            | W   | 0.414      | 1.000        | 0.333 (0.138)    | 0.448 (0.186)    | -         |     5.66 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     2747 | 2024-03-21 | paiN              | W   | 0.413      | 1.000        | 0.476 (0.197)    | 0.763 (0.315)    | -         |     2.88 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3060 | 2024-03-07 | OG                | L   | 0.321      | -            | -                | -                | -         |    -9.91 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3152 | 2024-03-04 | Liquid            | W   | 0.302      | -            | -                | -                | -         |     1.93 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3167 | 2024-03-03 | FURIA             | L   | 0.295      | -            | -                | -                | -         |    -6.69 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3206 | 2024-03-02 | BOSS              | W   | 0.287      | -            | -                | -                | -         |     0.04 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3225 | 2024-03-01 | Elevate           | W   | 0.281      | -            | -                | -                | -         |     0.14 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3712 | 2024-02-05 | Falcons           | L   | 0.115      | -            | -                | -                | -         |    -2.93 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3733 | 2024-02-04 | Spirit            | L   | 0.107      | -            | -                | -                | -         |    -0.94 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3753 | 2024-02-03 | Apeks             | W   | 0.101      | -            | -                | -                | -         |     0.04 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     3972 | 2024-01-23 | Ninjas in Pyjamas | L   | 0.027      | -            | -                | -                | -         |    -0.83 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4000 | 2024-01-22 | Natus Vincere     | L   | 0.020      | -            | -                | -                | -         |    -0.25 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($109,139.58)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $50,000.00     | $49,653.23      |
| 2024-06-09 |      0.947 | $8,000.00      | $7,575.78       |
| 2024-06-02 |      0.901 | $4,000.00      | $3,605.57       |
| 2024-05-12 |      0.760 | $45,000.00     | $34,211.03      |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |
| 2024-03-10 |      0.341 | $5,000.00      | $1,706.91       |
| 2024-02-11 |      0.154 | $16,000.00     | $2,462.97       |
| 2024-01-28 |      0.061 | $5,000.00      | $303.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
