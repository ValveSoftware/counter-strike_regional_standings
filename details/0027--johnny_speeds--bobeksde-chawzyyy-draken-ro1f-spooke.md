### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, chawzyyy, draken, Ro1f, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1299.2<br />
<br />
Final Rank Value (1299.2) = Starting Rank Value (1404.6) + Head To Head Adjustments (-105.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.558[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.195[<sup>2</sup>](#table1)
- LAN Wins: 0.736[<sup>2</sup>](#table1)

The average of these factors is 0.468<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1404.6
- 400 + ( ( 0.468 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1404.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       59 | 2024-07-16 | Young Ninjas    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.14 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           40 |      106 | 2024-07-15 | Endpoint        | W   | 1.000      | 0.371        | -                | 0.498 (0.185)    | 0 (0.000) |     3.22 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           39 |      153 | 2024-07-12 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -27.37 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           38 |      191 | 2024-07-10 | Sashi           | W   | 1.000      | 0.358        | 0.215 (0.077)    | 1.000 (0.358)    | 0 (0.000) |    11.78 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           37 |      193 | 2024-07-10 | Endpoint        | W   | 1.000      | 0.358        | -                | 0.498 (0.178)    | -         |     2.95 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           36 |      214 | 2024-07-09 | 9INE            | W   | 1.000      | -            | -                | -                | -         |     2.32 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           35 |      216 | 2024-07-09 | Revenant        | L   | 1.000      | -            | -                | -                | -         |   -29.05 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           34 |      239 | 2024-07-07 | lajtbitexe      | W   | 1.000      | -            | -                | -                | -         |     1.21 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           33 |      247 | 2024-07-05 | kONO            | W   | 1.000      | 0.333        | 0.042 (0.014)    | 0.595 (0.198)    | -         |     3.04 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           32 |      257 | 2024-06-30 | Young Gods      | W   | 1.000      | -            | -                | -                | -         |     1.18 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           31 |      279 | 2024-06-27 | Revenant        | W   | 1.000      | 0.333        | 0.037 (0.012)    | 0.287 (0.096)    | -         |     2.09 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           30 |      283 | 2024-06-25 | Revenant        | W   | 1.000      | 0.333        | 0.037 (0.012)    | -                | -         |     2.01 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           29 |      290 | 2024-06-23 | los kogutos     | W   | 1.000      | -            | -                | -                | -         |     0.18 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           28 |      358 | 2024-06-15 | Lilmix          | W   | 0.986      | 0.377        | 0.035 (0.013)    | -                | 1 (0.986) |     2.96 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           27 |      398 | 2024-06-14 | Lilmix          | W   | 0.980      | 0.377        | 0.035 (0.013)    | -                | 1 (0.980) |     2.90 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           26 |      440 | 2024-06-13 | Kappa Bar       | W   | 0.972      | -            | -                | -                | 1 (0.972) |     0.48 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |      539 | 2024-06-09 | Alliance        | W   | 0.947      | 0.347        | -                | 0.349 (0.115)    | 1 (0.947) |     2.98 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |      578 | 2024-06-09 | Preasy          | W   | 0.945      | -            | -                | -                | 1 (0.945) |     1.72 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |      852 | 2024-06-04 | Enterprise      | L   | 0.912      | -            | -                | -                | -         |   -24.93 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |      871 | 2024-06-03 | brazylijski luz | W   | 0.906      | -            | -                | -                | -         |     2.13 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |      873 | 2024-06-03 | Zero Tenacity   | W   | 0.906      | 0.371        | 0.154 (0.052)    | 1.000 (0.336)    | -         |     7.90 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |      963 | 2024-05-31 | UNiTY           | L   | 0.885      | -            | -                | -                | -         |   -23.80 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           19 |     1068 | 2024-05-26 | Preasy          | W   | 0.852      | -            | -                | -                | -         |     1.35 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     1166 | 2024-05-22 | Permitta        | W   | 0.825      | 0.371        | 0.039 (0.012)    | 0.794 (0.243)    | -         |     2.03 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           17 |     1479 | 2024-05-14 | kONO            | L   | 0.772      | -            | -                | -                | -         |   -22.58 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     1495 | 2024-05-13 | UNiTY           | W   | 0.767      | 0.333        | 0.039 (0.010)    | -                | -         |     3.34 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     1501 | 2024-05-13 | ECLOT           | W   | 0.765      | 0.333        | 0.103 (0.026)    | 0.551 (0.140)    | -         |     6.54 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     1512 | 2024-05-12 | Verdant         | W   | 0.761      | -            | -                | -                | -         |     1.37 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     1525 | 2024-05-12 | Preasy          | L   | 0.758      | -            | -                | -                | -         |   -22.95 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     1541 | 2024-05-11 | Lilmix          | W   | 0.754      | -            | -                | -                | 1 (0.754) |     1.69 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     1555 | 2024-05-11 | Flying Angels   | W   | 0.752      | -            | -                | -                | 1 (0.752) |     0.21 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     1573 | 2024-05-10 | FAVBET          | W   | 0.745      | 0.333        | -                | 0.420 (0.104)    | -         |     1.08 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     2097 | 2024-04-18 | UNiTY           | W   | 0.599      | -            | -                | -                | -         |     2.53 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            8 |     2162 | 2024-04-16 | Viperio         | W   | 0.586      | -            | -                | -                | -         |     0.32 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            7 |     2408 | 2024-04-07 | Alliance        | W   | 0.527      | -            | -                | -                | -         |     1.18 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     2416 | 2024-04-07 | Metizport       | L   | 0.525      | -            | -                | -                | -         |   -14.65 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            5 |     2426 | 2024-04-06 | JANO            | W   | 0.519      | -            | -                | -                | -         |     0.34 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            4 |     3026 | 2024-03-09 | Alliance        | L   | 0.333      | -            | -                | -                | -         |    -9.81 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     3127 | 2024-03-05 | B8              | L   | 0.308      | -            | -                | -                | -         |    -7.73 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     3133 | 2024-03-05 | Insilio         | W   | 0.307      | -            | -                | -                | -         |     0.72 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            1 |     3140 | 2024-03-05 | Sashi           | W   | 0.307      | -            | -                | -                | -         |     1.67 | chawzyyy, draken, Lekr0, Ro1f, spooke     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,711.05)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-30 |      1.000 | $662.00        | $662.00         |
| 2024-06-27 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-15 |      0.986 | $11,615.00     | $11,457.48      |
| 2024-06-09 |      0.947 | $7,224.00      | $6,841.48       |
| 2024-06-06 |      0.926 | $1,000.00      | $925.68         |
| 2024-05-13 |      0.765 | $6,000.00      | $4,590.58       |
| 2024-05-11 |      0.754 | $4,170.00      | $3,144.87       |
| 2024-04-18 |      0.599 | $6,000.00      | $3,593.41       |
| 2024-04-07 |      0.527 | $940.00        | $495.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
