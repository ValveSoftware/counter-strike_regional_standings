### Roster Details<br />
Team Name: Imperial fe<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  1122.3<br />
<br />
Final Rank Value (1122.3) = Starting Rank Value (1115.1) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.573[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.417[<sup>2</sup>](#table1)

The average of these factors is 0.352<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1115.1
- 400 + ( ( 0.352 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1115.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      577 | 2024-06-02 | Let Her Cook  | W   | 1.000      | 0.524        | 0.083 (0.044)    | 0.199 (0.104)    | 1 (1.000) |     9.73 | ANa, Kat, tory, twenty3, zAAz            |
|           25 |      584 | 2024-06-02 | Fluxo Demons  | W   | 1.000      | 0.524        | 0.044 (0.023)    | 0.244 (0.128)    | 1 (1.000) |     8.40 | ANa, Kat, tory, twenty3, zAAz            |
|           24 |      642 | 2024-05-31 | BIG EQUIPA    | W   | 1.000      | 0.524        | 0.025 (0.013)    | 0.254 (0.133)    | 1 (1.000) |     5.95 | ANa, Kat, tory, twenty3, zAAz            |
|           23 |      659 | 2024-05-31 | HSG fe        | W   | 1.000      | 0.524        | 0.043 (0.023)    | 0.090 (0.047)    | 1 (1.000) |     7.07 | ANa, Kat, tory, twenty3, zAAz            |
|           22 |      961 | 2024-05-19 | NAVI Javelins | L   | 1.000      | -            | -                | -                | -         |   -22.57 | Angelka, Hanka, LETi, Liina, vicu        |
|           21 |      971 | 2024-05-19 | NIP Impact    | W   | 1.000      | 0.281        | 0.008 (0.002)    | 0.207 (0.058)    | 0 (0.000) |     4.16 | ANa, Kat, tory, twenty3, zAAz            |
|           20 |      988 | 2024-05-18 | Crescent fe   | W   | 0.995      | 0.281        | 0.007 (0.002)    | -                | 0 (0.000) |     2.18 | akiyanora, amore, ayaka, Margo, meo      |
|           19 |     1371 | 2024-05-05 | Crescent fe   | W   | 0.908      | -            | -                | -                | 0 (0.000) |     2.03 | akiyanora, amore, ayaka, Margo, meo      |
|           18 |     1538 | 2024-04-27 | NIP Impact    | W   | 0.855      | 0.252        | -                | 0.207 (0.045)    | 0 (0.000) |     3.55 | ANa, Kat, tory, twenty3, zAAz            |
|           17 |     1541 | 2024-04-27 | Spirit fe     | W   | 0.855      | -            | -                | -                | 0 (0.000) |     1.79 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           16 |     1734 | 2024-04-19 | ex-GUILD fe   | W   | 0.803      | -            | -                | -                | 0 (0.000) |     2.44 | Ann4, D7, KiTKaT, Nea, pullox            |
|           15 |     1859 | 2024-04-16 | NAVI Javelins | L   | 0.783      | -            | -                | -                | -         |   -19.01 | Angelka, Hanka, LETi, Liina, vicu        |
|           14 |     1893 | 2024-04-14 | NIP Impact    | W   | 0.769      | 0.303        | 0.008 (0.002)    | 0.207 (0.048)    | -         |     3.23 | aiM, jenkon, Nayomy, Qiyarah, ramziiN    |
|           13 |     1911 | 2024-04-13 | NAVI Javelins | W   | 0.762      | 0.303        | 0.041 (0.009)    | 0.290 (0.067)    | -         |     5.07 | Angelka, Hanka, LETi, Liina, vicu        |
|           12 |     1947 | 2024-04-11 | Astralis W    | W   | 0.749      | -            | -                | -                | -         |     1.44 | anja, aurora, Ismo, josefine, marie      |
|           11 |     1994 | 2024-04-10 | Astralis W    | W   | 0.742      | -            | -                | -                | -         |     1.45 | anja, aurora, Ismo, josefine, marie      |
|           10 |     2081 | 2024-04-08 | Crescent fe   | W   | 0.728      | -            | -                | -                | -         |     1.95 | akiyanora, amore, ayaka, Margo, meo      |
|            9 |     2111 | 2024-04-07 | NIP Impact    | W   | 0.722      | -            | -                | -                | -         |     2.90 | ANa, Kat, tory, twenty3, zAAz            |
|            8 |     2115 | 2024-04-07 | BIG EQUIPA    | W   | 0.721      | 0.262        | 0.025 (0.005)    | 0.254 (0.048)    | -         |     3.94 | JennyR, juliano, kyossa, pauliiee, Zana  |
|            7 |     2131 | 2024-04-06 | ENCE Athena   | W   | 0.714      | -            | -                | -                | -         |     1.78 | Aida, Emmsan, miLo, Waldee, xia          |
|            6 |     2352 | 2024-03-27 | ENCE Athena   | W   | 0.650      | -            | -                | -                | -         |     1.71 | Aida, Emmsan, miLo, Waldee, xia          |
|            5 |     2589 | 2024-03-14 | BIG EQUIPA    | W   | 0.563      | 0.331        | 0.025 (0.005)    | 0.254 (0.047)    | -         |     3.25 | JennyR, juliano, kyossa, pauliiee, Zana  |
|            4 |     2767 | 2024-03-07 | NIP Impact    | W   | 0.516      | -            | -                | -                | -         |     1.87 | aiM, jenkon, Nayomy, Qiyarah, ramziiN    |
|            3 |     2998 | 2024-02-26 | 500           | L   | 0.447      | -            | -                | -                | -         |   -12.23 | ANa, Kat, tory, twenty3, zAAz            |
|            2 |     3419 | 2024-02-05 | Sampi         | L   | 0.308      | -            | -                | -                | -         |    -6.98 | ANa, Kat, tory, twenty3, zAAz            |
|            1 |     3578 | 2024-01-29 | ex-Sprout     | L   | 0.261      | -            | -                | -                | -         |    -7.85 | ANa, hyskeee, Kat, tory, twenty3         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54,015.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-19 |      1.000 | $800.00        | $800.00         |
| 2024-05-05 |      0.908 | $750.00        | $681.20         |
| 2024-04-27 |      0.855 | $535.00        | $457.47         |
| 2024-04-16 |      0.783 | $1,500.00      | $1,174.17       |
| 2024-04-07 |      0.722 | $1,250.00      | $902.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
