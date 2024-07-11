### Roster Details<br />
Team Name: Imperial fe<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1155.3<br />
<br />
Final Rank Value (1155.3) = Starting Rank Value (1149.2) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.585[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.433[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1149.2
- 400 + ( ( 0.355 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1149.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      713 | 2024-06-02 | Let Her Cook  | W   | 0.941      | 0.524        | 0.091 (0.045)    | 0.195 (0.096)    | 1 (0.941) |     9.10 | ANa, Kat, tory, twenty3, zAAz    |
|           25 |      720 | 2024-06-02 | Fluxo Demons  | W   | 0.940      | 0.524        | 0.048 (0.024)    | 0.224 (0.110)    | 1 (0.940) |     7.20 | ANa, Kat, tory, twenty3, zAAz    |
|           24 |      776 | 2024-05-31 | BIG EQUIPA    | W   | 0.928      | 0.524        | 0.027 (0.013)    | 0.225 (0.109)    | 1 (0.928) |     4.80 | ANa, Kat, tory, twenty3, zAAz    |
|           23 |      793 | 2024-05-31 | HSG fe        | W   | 0.926      | 0.524        | 0.047 (0.023)    | 0.092 (0.044)    | 1 (0.926) |     6.21 | ANa, Kat, tory, twenty3, zAAz    |
|           22 |     1095 | 2024-05-19 | NAVI Javelins | L   | 0.847      | -            | -                | -                | -         |   -20.27 | ANa, Kat, tory, twenty3, zAAz    |
|           21 |     1105 | 2024-05-19 | NIP Impact    | W   | 0.845      | 0.281        | 0.008 (0.002)    | 0.199 (0.047)    | 0 (0.000) |     2.96 | ANa, Kat, tory, twenty3, zAAz    |
|           20 |     1122 | 2024-05-18 | Crescent fe   | W   | 0.840      | 0.281        | 0.007 (0.002)    | -                | 0 (0.000) |     1.66 | ANa, Kat, tory, twenty3, zAAz    |
|           19 |     1505 | 2024-05-05 | Crescent fe   | W   | 0.753      | -            | -                | -                | 0 (0.000) |     1.51 | ANa, Kat, tory, twenty3, zAAz    |
|           18 |     1672 | 2024-04-27 | NIP Impact    | W   | 0.699      | 0.252        | -                | 0.199 (0.035)    | 0 (0.000) |     2.43 | ANa, Kat, tory, twenty3, zAAz    |
|           17 |     1675 | 2024-04-27 | Spirit fe     | W   | 0.699      | -            | -                | -                | 0 (0.000) |     1.28 | ANa, Kat, tory, twenty3, zAAz    |
|           16 |     1868 | 2024-04-19 | ex-GUILD fe   | W   | 0.647      | -            | -                | -                | 0 (0.000) |     1.64 | ANa, Kat, tory, twenty3, zAAz    |
|           15 |     1993 | 2024-04-16 | NAVI Javelins | L   | 0.627      | -            | -                | -                | -         |   -15.89 | ANa, Kat, tory, twenty3, zAAz    |
|           14 |     2027 | 2024-04-14 | NIP Impact    | W   | 0.614      | 0.303        | 0.008 (0.002)    | 0.199 (0.037)    | -         |     2.12 | ANa, Kat, tory, twenty3, zAAz    |
|           13 |     2045 | 2024-04-13 | NAVI Javelins | W   | 0.606      | 0.303        | 0.042 (0.008)    | 0.266 (0.049)    | -         |     3.52 | ANa, Kat, tory, twenty3, zAAz    |
|           12 |     2081 | 2024-04-11 | Astralis W    | W   | 0.593      | -            | -                | -                | -         |     0.98 | ANa, Kat, tory, twenty3, zAAz    |
|           11 |     2128 | 2024-04-10 | Astralis W    | W   | 0.586      | -            | -                | -                | -         |     0.98 | ANa, Kat, tory, twenty3, zAAz    |
|           10 |     2215 | 2024-04-08 | Crescent fe   | W   | 0.573      | -            | -                | -                | -         |     1.31 | ANa, Kat, tory, twenty3, zAAz    |
|            9 |     2245 | 2024-04-07 | NIP Impact    | W   | 0.566      | -            | -                | -                | -         |     1.85 | ANa, Kat, tory, twenty3, zAAz    |
|            8 |     2249 | 2024-04-07 | BIG EQUIPA    | W   | 0.565      | 0.262        | 0.027 (0.004)    | 0.225 (0.033)    | -         |     2.64 | ANa, Kat, tory, twenty3, zAAz    |
|            7 |     2265 | 2024-04-06 | ENCE Athena   | W   | 0.559      | -            | -                | -                | -         |     1.14 | ANa, Kat, tory, twenty3, zAAz    |
|            6 |     2485 | 2024-03-27 | ENCE Athena   | W   | 0.494      | -            | -                | -                | -         |     1.05 | ANa, Kat, tory, twenty3, zAAz    |
|            5 |     2722 | 2024-03-14 | BIG EQUIPA    | W   | 0.408      | 0.331        | 0.027 (0.004)    | 0.225 (0.030)    | -         |     1.97 | ANa, Kat, tory, twenty3, zAAz    |
|            4 |     2900 | 2024-03-07 | NIP Impact    | W   | 0.361      | -            | -                | -                | -         |     1.07 | ANa, Kat, tory, twenty3, zAAz    |
|            3 |     3131 | 2024-02-26 | 500           | L   | 0.292      | -            | -                | -                | -         |    -8.28 | ANa, Kat, tory, twenty3, zAAz    |
|            2 |     3552 | 2024-02-05 | Slovakia      | L   | 0.153      | -            | -                | -                | -         |    -3.69 | ANa, Kat, tory, twenty3, zAAz    |
|            1 |     3711 | 2024-01-29 | ex-Sprout     | L   | 0.105      | -            | -                | -                | -         |    -3.20 | ANa, hyskeee, Kat, tory, twenty3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,324.26)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.941 | $50,000.00     | $47,060.17      |
| 2024-05-19 |      0.847 | $800.00        | $677.23         |
| 2024-05-05 |      0.753 | $750.00        | $564.44         |
| 2024-04-27 |      0.699 | $535.00        | $374.19         |
| 2024-04-16 |      0.627 | $1,500.00      | $940.66         |
| 2024-04-07 |      0.566 | $1,250.00      | $707.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
