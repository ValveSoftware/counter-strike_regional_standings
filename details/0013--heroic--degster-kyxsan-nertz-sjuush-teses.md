### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1597.6<br />
<br />
Final Rank Value (1597.6) = Starting Rank Value (1612.4) + Head To Head Adjustments (-14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.639[<sup>1</sup>](#table2)
- Bounty Collected: 0.583[<sup>2</sup>](#table1)
- Opponent Network: 0.289[<sup>2</sup>](#table1)
- LAN Wins: 0.885[<sup>2</sup>](#table1)

The average of these factors is 0.599<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1612.4
- 400 + ( ( 0.599 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1612.4


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
|           47 |     1026 | 2024-06-06 | ENCE              | W   | 0.879      | 0.715        | 0.171 (0.108)    | 0.380 (0.239)    | 1 (0.879) |     4.36 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           46 |     1043 | 2024-06-06 | Sashi             | W   | 0.878      | 0.715        | 0.234 (0.147)    | 1.000 (0.628)    | 1 (0.878) |     2.95 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           45 |     1051 | 2024-06-06 | The MongolZ       | L   | 0.877      | -            | -                | -                | -         |    -5.05 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           44 |     1079 | 2024-06-05 | Ninjas in Pyjamas | L   | 0.873      | -            | -                | -                | -         |   -15.06 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           43 |     1102 | 2024-06-05 | Astralis          | L   | 0.871      | -            | -                | -                | -         |    -9.07 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           42 |     1234 | 2024-05-31 | Vitality          | L   | 0.840      | -            | -                | -                | -         |    -5.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           41 |     1279 | 2024-05-29 | BIG               | W   | 0.828      | 0.624        | -                | 0.347 (0.179)    | 1 (0.828) |     4.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           40 |     1291 | 2024-05-29 | Natus Vincere     | W   | 0.827      | 0.624        | 1.000 (0.516)    | 0.364 (0.188)    | 1 (0.827) |    22.59 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |     1311 | 2024-05-28 | M80               | W   | 0.820      | 0.624        | 0.238 (0.122)    | 0.614 (0.314)    | 1 (0.820) |     4.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |     1327 | 2024-05-27 | Virtus.pro        | L   | 0.814      | -            | -                | -                | -         |    -8.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |     1578 | 2024-05-18 | MOUZ              | L   | 0.753      | -            | -                | -                | -         |    -2.87 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           36 |     1611 | 2024-05-17 | MIBR              | W   | 0.747      | 0.769        | 0.257 (0.148)    | 0.561 (0.322)    | 1 (0.747) |     8.46 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           35 |     1651 | 2024-05-16 | Spirit            | L   | 0.739      | -            | -                | -                | -         |    -3.36 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           34 |     1701 | 2024-05-15 | MIBR              | W   | 0.733      | 0.769        | 0.257 (0.145)    | 0.561 (0.316)    | 1 (0.733) |     8.37 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           33 |     1969 | 2024-05-04 | Ninjas in Pyjamas | L   | 0.660      | -            | -                | -                | -         |    -9.92 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |     1982 | 2024-05-03 | BIG               | L   | 0.654      | -            | -                | -                | -         |   -17.85 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |     1994 | 2024-05-03 | FlyQuest          | W   | 0.652      | 0.889        | -                | 0.349 (0.202)    | 1 (0.652) |     2.41 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     2012 | 2024-05-02 | Complexity        | L   | 0.646      | -            | -                | -                | -         |    -8.55 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     2058 | 2024-04-30 | Ninjas in Pyjamas | W   | 0.633      | 0.889        | 0.287 (0.162)    | 0.537 (0.302)    | 1 (0.633) |    10.52 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     2586 | 2024-04-10 | G2                | L   | 0.499      | -            | -                | -                | -         |    -1.95 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     2643 | 2024-04-09 | FURIA             | W   | 0.492      | 0.624        | 0.355 (0.109)    | -                | 1 (0.492) |    10.71 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     2677 | 2024-04-08 | 9z                | W   | 0.485      | 0.624        | 0.511 (0.154)    | 0.671 (0.203)    | -         |     8.09 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     2687 | 2024-04-07 | Liquid            | L   | 0.483      | -            | -                | -                | -         |   -10.96 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     2992 | 2024-03-23 | paiN              | L   | 0.380      | -            | -                | -                | -         |    -8.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     3014 | 2024-03-22 | Virtus.pro        | L   | 0.372      | -            | -                | -                | -         |    -3.26 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     3026 | 2024-03-21 | Complexity        | L   | 0.367      | -            | -                | -                | -         |    -4.83 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     3034 | 2024-03-21 | FaZe              | W   | 0.366      | 1.000        | 0.854 (0.312)    | -                | -         |     8.24 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     3083 | 2024-03-18 | Eternal Fire      | W   | 0.346      | -            | -                | -                | -         |     6.29 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     3104 | 2024-03-17 | Imperial          | W   | 0.340      | -            | -                | -                | -         |     2.17 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     3114 | 2024-03-17 | Lynn Vision       | W   | 0.339      | -            | -                | -                | -         |     0.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     3214 | 2024-03-13 | Metizport         | W   | 0.313      | -            | -                | -                | -         |     0.25 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     3239 | 2024-03-12 | Virtus.pro        | L   | 0.307      | -            | -                | -                | -         |    -2.52 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     3256 | 2024-03-11 | ENCE              | W   | 0.301      | -            | -                | -                | -         |     2.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     3268 | 2024-03-11 | ex-Preasy         | W   | 0.300      | -            | -                | -                | -         |     0.13 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     3309 | 2024-03-09 | OG                | L   | 0.286      | -            | -                | -                | -         |    -8.64 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     3385 | 2024-03-06 | Young Ninjas      | W   | 0.267      | -            | -                | -                | -         |     0.08 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     3666 | 2024-02-22 | GamerLegion       | W   | 0.180      | -            | -                | -                | -         |     0.08 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3687 | 2024-02-21 | Spirit            | L   | 0.173      | -            | -                | -                | -         |    -0.87 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     3724 | 2024-02-20 | Astralis          | W   | 0.165      | -            | -                | -                | -         |     3.44 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     3738 | 2024-02-19 | Vitality          | L   | 0.160      | -            | -                | -                | -         |    -0.94 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     3746 | 2024-02-19 | ex-Preasy         | W   | 0.159      | -            | -                | -                | -         |     0.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     3989 | 2024-02-06 | G2                | L   | 0.074      | -            | -                | -                | -         |    -0.25 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     3996 | 2024-02-06 | GamerLegion       | W   | 0.072      | -            | -                | -                | -         |     0.03 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     4003 | 2024-02-05 | Vitality          | W   | 0.066      | -            | -                | -                | -         |     1.69 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     4054 | 2024-02-03 | G2                | L   | 0.053      | -            | -                | -                | -         |    -0.18 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     4124 | 2024-01-31 | BIG               | W   | 0.034      | -            | -                | -                | -         |     0.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     4134 | 2024-01-31 | Astralis          | W   | 0.032      | -            | -                | -                | -         |     0.68 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,281.89)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $8,000.00      | $7,197.97       |
| 2024-06-02 |      0.854 | $10,000.00     | $8,541.67       |
| 2024-05-19 |      0.759 | $50,000.00     | $37,958.43      |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |
| 2024-04-14 |      0.525 | $6,000.00      | $3,149.38       |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |
| 2024-03-10 |      0.294 | $7,500.00      | $2,206.18       |
| 2024-02-11 |      0.107 | $24,000.00     | $2,561.05       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
