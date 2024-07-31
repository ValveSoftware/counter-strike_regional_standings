### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Global Rank: [97](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
<br />
Final Rank Value:  865.0<br />
<br />
Final Rank Value (865.0) = Starting Rank Value (825.0) + Head To Head Adjustments (40.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.0
- 400 + ( ( 0.206 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 825.0


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
|           21 |     1434 | 2024-06-01 | panelinha         | L   | 0.801      | -            | -                | -                | -         |   -12.55 | Angelka, Hanka, LETi, Liina, vicu |
|           20 |     1466 | 2024-05-31 | TSM Shimmer       | W   | 0.795      | 0.524        | 0.021 (0.009)    | 0.200 (0.083)    | 1 (0.795) |     7.71 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |     1479 | 2024-05-31 | Let Her Cook      | L   | 0.793      | -            | -                | -                | -         |   -11.07 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |     1789 | 2024-05-19 | Imperial fe       | W   | 0.712      | 0.281        | 0.131 (0.026)    | 0.270 (0.054)    | 0 (0.000) |    16.58 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |     1795 | 2024-05-19 | BIG EQUIPA        | W   | 0.711      | 0.281        | 0.018 (0.004)    | 0.157 (0.031)    | 0 (0.000) |     9.12 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |     1825 | 2024-05-18 | Spirit fe         | W   | 0.705      | 0.281        | 0.005 (0.001)    | 0.101 (0.020)    | 0 (0.000) |     5.11 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     2560 | 2024-04-19 | Crescent fe       | W   | 0.513      | 0.331        | 0.005 (0.001)    | 0.080 (0.014)    | 0 (0.000) |     3.99 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     2687 | 2024-04-16 | Imperial fe       | W   | 0.493      | 0.303        | 0.131 (0.020)    | 0.270 (0.040)    | 0 (0.000) |    12.04 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     2708 | 2024-04-15 | NIP Impact        | W   | 0.486      | 0.303        | 0.006 (0.001)    | 0.191 (0.028)    | 0 (0.000) |     5.66 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     2726 | 2024-04-14 | Astralis W        | W   | 0.478      | -            | -                | -                | 0 (0.000) |     3.56 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     2739 | 2024-04-13 | Imperial fe       | L   | 0.472      | -            | -                | -                | -         |    -3.23 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     2780 | 2024-04-11 | Spirit fe         | W   | 0.459      | 0.303        | 0.005 (0.001)    | 0.101 (0.014)    | 0 (0.000) |     3.97 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     2881 | 2024-04-09 | NIP Impact        | L   | 0.445      | -            | -                | -                | -         |    -9.07 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     3003 | 2024-04-04 | Spirit fe         | W   | 0.413      | 0.331        | 0.005 (0.001)    | 0.101 (0.014)    | 0 (0.000) |     3.66 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     3042 | 2024-04-03 | Let Her Cook      | L   | 0.406      | -            | -                | -                | -         |    -4.65 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     3419 | 2024-03-14 | 1WIN Gang         | W   | 0.273      | -            | -                | -                | -         |     2.35 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     3621 | 2024-03-06 | Fearless Cheetahs | W   | 0.220      | -            | -                | -                | -         |     2.14 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     3842 | 2024-02-25 | BIG EQUIPA        | W   | 0.152      | 0.238        | 0.018 (0.001)    | 0.157 (0.006)    | -         |     2.07 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3846 | 2024-02-25 | ENCE Athena       | W   | 0.151      | -            | -                | -                | -         |     1.27 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3880 | 2024-02-24 | Crescent fe       | W   | 0.145      | -            | -                | -                | -         |     1.35 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     4259 | 2024-02-04 | EK Violet         | W   | 0.013      | -            | -                | -                | -         |     0.05 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,905.34)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.807 | $7,000.00      | $5,649.56       |
| 2024-05-19 |      0.712 | $2,000.00      | $1,424.83       |
| 2024-04-16 |      0.493 | $3,500.00      | $1,725.44       |
| 2024-02-25 |      0.152 | $630.00        | $95.94          |
| 2024-02-04 |      0.013 | $750.00        | $9.57           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
