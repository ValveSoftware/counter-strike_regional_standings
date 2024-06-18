### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  925.1<br />
<br />
Final Rank Value (925.1) = Starting Rank Value (867.9) + Head To Head Adjustments (57.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.418[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.9
- 400 + ( ( 0.230 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 867.9


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
|           21 |      606 | 2024-06-01 | Fluxo Demons      | L   | 1.000      | -            | -                | -                | -         |   -16.15 | Angelka, Hanka, LETi, Liina, vicu |
|           20 |      638 | 2024-05-31 | TSM Shimmer       | W   | 1.000      | 0.524        | 0.027 (0.014)    | 0.270 (0.141)    | 1 (1.000) |     7.96 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |      651 | 2024-05-31 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -15.61 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |      961 | 2024-05-19 | Imperial fe       | W   | 1.000      | 0.281        | 0.180 (0.051)    | 0.351 (0.099)    | 0 (0.000) |    22.57 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |      967 | 2024-05-19 | BIG EQUIPA        | W   | 1.000      | 0.281        | 0.025 (0.007)    | 0.254 (0.072)    | 0 (0.000) |    12.02 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |      997 | 2024-05-18 | Spirit fe         | W   | 0.995      | 0.281        | 0.005 (0.001)    | 0.054 (0.015)    | 0 (0.000) |     5.24 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     1732 | 2024-04-19 | Crescent fe       | W   | 0.803      | 0.331        | 0.007 (0.002)    | 0.109 (0.029)    | 0 (0.000) |     4.89 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     1859 | 2024-04-16 | Imperial fe       | W   | 0.783      | 0.303        | 0.180 (0.043)    | 0.351 (0.083)    | 0 (0.000) |    19.01 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     1880 | 2024-04-15 | NIP Impact        | W   | 0.776      | 0.303        | 0.008 (0.002)    | 0.207 (0.049)    | 0 (0.000) |     8.73 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     1898 | 2024-04-14 | Astralis W        | W   | 0.768      | -            | -                | -                | 0 (0.000) |     4.66 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     1911 | 2024-04-13 | Imperial fe       | L   | 0.762      | -            | -                | -                | -         |    -5.07 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     1952 | 2024-04-11 | Spirit fe         | W   | 0.749      | 0.303        | 0.005 (0.001)    | -                | 0 (0.000) |     5.20 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     2053 | 2024-04-09 | NIP Impact        | L   | 0.735      | -            | -                | -                | -         |   -15.32 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     2175 | 2024-04-04 | Spirit fe         | W   | 0.703      | 0.331        | 0.005 (0.001)    | 0.054 (0.013)    | 0 (0.000) |     5.00 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     2214 | 2024-04-03 | Let Her Cook      | L   | 0.696      | -            | -                | -                | -         |    -8.40 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     2592 | 2024-03-14 | 1WIN Gang         | W   | 0.563      | -            | -                | -                | -         |     3.98 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     2794 | 2024-03-06 | Fearless Cheetahs | W   | 0.510      | 0.331        | -                | 0.104 (0.017)    | -         |     4.50 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     3015 | 2024-02-25 | BIG EQUIPA        | W   | 0.442      | 0.238        | 0.025 (0.003)    | 0.254 (0.027)    | -         |     5.87 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3019 | 2024-02-25 | ENCE Athena       | W   | 0.441      | -            | -                | -                | -         |     3.34 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3053 | 2024-02-24 | Crescent fe       | W   | 0.435      | -            | -                | -                | -         |     3.60 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     3432 | 2024-02-04 | VIOLET            | W   | 0.303      | -            | -                | -                | -         |     1.13 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,245.16)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-05-19 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-16 |      0.783 | $3,500.00      | $2,739.72       |
| 2024-02-25 |      0.442 | $630.00        | $278.52         |
| 2024-02-04 |      0.303 | $750.00        | $226.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
