### Roster Details<br />
Team Name: HEROIC<br />
Roster: kyxsan, NertZ, sAw, sjuush, TeSeS<br />
Global Rank: [12](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1581.7<br />
<br />
Final Rank Value (1581.7) = Starting Rank Value (1583.8) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.596[<sup>1</sup>](#table2)
- Bounty Collected: 0.559[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.870[<sup>2</sup>](#table1)

The average of these factors is 0.573<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1583.8
- 400 + ( ( 0.573 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1583.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       71 | 2024-07-30 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -3.84 | kyxsan, NertZ, sAw, sjuush, TeSeS      |
|           46 |       93 | 2024-07-29 | Complexity        | W   | 1.000      | 0.581        | 0.319 (0.185)    | 0.367 (0.213)    | 1 (1.000) |    15.26 | kyxsan, NertZ, sAw, sjuush, TeSeS      |
|           45 |     1268 | 2024-06-06 | ENCE              | W   | 0.832      | 0.715        | 0.175 (0.104)    | 0.404 (0.240)    | 1 (0.832) |     6.01 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           44 |     1285 | 2024-06-06 | Sashi             | W   | 0.831      | 0.715        | 0.187 (0.111)    | 0.973 (0.578)    | 1 (0.831) |     3.25 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           43 |     1293 | 2024-06-06 | The MongolZ       | L   | 0.830      | -            | -                | -                | -         |    -3.36 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           42 |     1321 | 2024-06-05 | Ninjas in Pyjamas | L   | 0.826      | -            | -                | -                | -         |   -14.81 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           41 |     1344 | 2024-06-05 | Astralis          | L   | 0.823      | -            | -                | -                | -         |    -8.42 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           40 |     1476 | 2024-05-31 | Vitality          | L   | 0.793      | -            | -                | -                | -         |    -4.72 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |     1521 | 2024-05-29 | BIG               | W   | 0.781      | -            | -                | -                | 1 (0.781) |     3.47 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |     1533 | 2024-05-29 | Natus Vincere     | W   | 0.779      | 0.624        | 1.000 (0.486)    | 0.331 (0.161)    | 1 (0.779) |    21.73 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |     1553 | 2024-05-28 | M80               | W   | 0.773      | 0.624        | 0.190 (0.092)    | 0.551 (0.266)    | 1 (0.773) |     3.69 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |     1569 | 2024-05-27 | Virtus.pro        | L   | 0.767      | -            | -                | -                | -         |    -8.23 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |     1820 | 2024-05-18 | MOUZ              | L   | 0.705      | -            | -                | -                | -         |    -2.82 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           34 |     1853 | 2024-05-17 | MIBR              | W   | 0.699      | 0.769        | 0.202 (0.108)    | 0.610 (0.328)    | 1 (0.699) |     8.01 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           33 |     1893 | 2024-05-16 | Spirit            | L   | 0.692      | -            | -                | -                | -         |    -2.69 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           32 |     1943 | 2024-05-15 | MIBR              | W   | 0.685      | 0.769        | 0.202 (0.106)    | 0.610 (0.321)    | 1 (0.685) |     7.83 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           31 |     2211 | 2024-05-04 | Ninjas in Pyjamas | L   | 0.613      | -            | -                | -                | -         |    -9.86 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     2224 | 2024-05-03 | BIG               | L   | 0.607      | -            | -                | -                | -         |   -16.78 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     2236 | 2024-05-03 | FlyQuest          | W   | 0.605      | 0.889        | -                | 0.298 (0.160)    | 1 (0.605) |     1.99 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     2254 | 2024-05-02 | Complexity        | L   | 0.599      | -            | -                | -                | -         |    -8.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     2300 | 2024-04-30 | Ninjas in Pyjamas | W   | 0.585      | 0.889        | 0.227 (0.118)    | 0.477 (0.248)    | 1 (0.585) |     9.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     2828 | 2024-04-10 | G2                | L   | 0.451      | -            | -                | -                | -         |    -1.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     2885 | 2024-04-09 | FURIA             | W   | 0.445      | -            | -                | -                | -         |     9.48 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     2919 | 2024-04-08 | 9z                | W   | 0.437      | 0.624        | 0.412 (0.113)    | 0.625 (0.171)    | -         |     6.78 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     2929 | 2024-04-07 | Liquid            | L   | 0.436      | -            | -                | -                | -         |    -9.26 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     3234 | 2024-03-23 | paiN              | L   | 0.333      | -            | -                | -                | -         |    -7.35 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     3256 | 2024-03-22 | Virtus.pro        | L   | 0.324      | -            | -                | -                | -         |    -3.28 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     3268 | 2024-03-21 | Complexity        | L   | 0.320      | -            | -                | -                | -         |    -4.37 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     3276 | 2024-03-21 | FaZe              | W   | 0.318      | 1.000        | 0.643 (0.205)    | -                | -         |     6.79 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     3325 | 2024-03-18 | Eternal Fire      | W   | 0.299      | -            | -                | -                | -         |     6.57 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     3346 | 2024-03-17 | Imperial          | W   | 0.293      | -            | -                | -                | -         |     1.58 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     3356 | 2024-03-17 | Lynn Vision       | W   | 0.292      | -            | -                | -                | -         |     0.35 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     3456 | 2024-03-13 | Metizport         | W   | 0.265      | -            | -                | -                | -         |     0.22 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     3481 | 2024-03-12 | Virtus.pro        | L   | 0.260      | -            | -                | -                | -         |    -2.50 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     3498 | 2024-03-11 | ENCE              | W   | 0.253      | -            | -                | -                | -         |     3.05 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     3510 | 2024-03-11 | ex-Preasy         | W   | 0.252      | -            | -                | -                | -         |     0.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     3551 | 2024-03-09 | OG                | L   | 0.239      | -            | -                | -                | -         |    -7.22 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3627 | 2024-03-06 | Young Ninjas      | W   | 0.219      | -            | -                | -                | -         |     0.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     3908 | 2024-02-22 | GamerLegion       | W   | 0.132      | -            | -                | -                | -         |     0.05 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     3929 | 2024-02-21 | Spirit            | L   | 0.126      | -            | -                | -                | -         |    -0.54 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     3966 | 2024-02-20 | Astralis          | W   | 0.118      | -            | -                | -                | -         |     2.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     3980 | 2024-02-19 | Vitality          | L   | 0.113      | -            | -                | -                | -         |    -0.67 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     3988 | 2024-02-19 | ex-Preasy         | W   | 0.112      | -            | -                | -                | -         |     0.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     4231 | 2024-02-06 | G2                | L   | 0.026      | -            | -                | -                | -         |    -0.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     4238 | 2024-02-06 | GamerLegion       | W   | 0.025      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     4245 | 2024-02-05 | Vitality          | W   | 0.019      | -            | -                | -                | -         |     0.48 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     4296 | 2024-02-03 | G2                | L   | 0.005      | -            | -                | -                | -         |    -0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,016.27)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.852 | $8,000.00      | $6,819.67       |
| 2024-06-02 |      0.807 | $10,000.00     | $8,068.80       |
| 2024-05-19 |      0.712 | $50,000.00     | $35,594.05      |
| 2024-05-12 |      0.666 | $7,000.00      | $4,660.13       |
| 2024-04-14 |      0.478 | $6,000.00      | $2,865.66       |
| 2024-03-31 |      0.387 | $20,000.00     | $7,730.31       |
| 2024-03-10 |      0.247 | $7,500.00      | $1,851.52       |
| 2024-02-11 |      0.059 | $24,000.00     | $1,426.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
