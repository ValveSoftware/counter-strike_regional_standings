### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [95](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  880.4<br />
<br />
Final Rank Value (880.4) = Starting Rank Value (837.4) + Head To Head Adjustments (43.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.4
- 400 + ( ( 0.216 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 837.4


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
|           21 |     1192 | 2024-06-01 | Fluxo Demons      | L   | 0.848      | -            | -                | -                | -         |   -13.33 | Angelka, Hanka, LETi, Liina, vicu |
|           20 |     1224 | 2024-05-31 | TSM Shimmer       | W   | 0.842      | 0.524        | 0.023 (0.010)    | 0.199 (0.088)    | 1 (0.842) |     7.71 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |     1237 | 2024-05-31 | Let Her Cook      | L   | 0.840      | -            | -                | -                | -         |   -11.75 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |     1547 | 2024-05-19 | Imperial fe       | W   | 0.760      | 0.281        | 0.165 (0.035)    | 0.308 (0.066)    | 0 (0.000) |    17.91 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |     1553 | 2024-05-19 | BIG EQUIPA        | W   | 0.759      | 0.281        | 0.022 (0.005)    | 0.186 (0.040)    | 0 (0.000) |     9.63 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |     1583 | 2024-05-18 | Spirit fe         | W   | 0.752      | 0.281        | 0.004 (0.001)    | 0.073 (0.015)    | 0 (0.000) |     4.89 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     2318 | 2024-04-19 | Crescent fe       | W   | 0.560      | 0.331        | 0.006 (0.001)    | 0.092 (0.017)    | 0 (0.000) |     4.13 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     2445 | 2024-04-16 | Imperial fe       | W   | 0.540      | 0.303        | 0.165 (0.027)    | 0.308 (0.050)    | 0 (0.000) |    13.40 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     2466 | 2024-04-15 | NIP Impact        | W   | 0.533      | 0.303        | 0.007 (0.001)    | 0.216 (0.035)    | 0 (0.000) |     6.13 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     2484 | 2024-04-14 | Astralis W        | W   | 0.526      | -            | -                | -                | 0 (0.000) |     3.75 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     2497 | 2024-04-13 | Imperial fe       | L   | 0.519      | -            | -                | -                | -         |    -3.33 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     2538 | 2024-04-11 | Spirit fe         | W   | 0.506      | 0.303        | 0.004 (0.001)    | 0.073 (0.011)    | 0 (0.000) |     3.99 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     2639 | 2024-04-09 | NIP Impact        | L   | 0.493      | -            | -                | -                | -         |   -10.12 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     2761 | 2024-04-04 | Spirit fe         | W   | 0.460      | 0.331        | 0.004 (0.001)    | 0.073 (0.011)    | 0 (0.000) |     3.70 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     2800 | 2024-04-03 | Let Her Cook      | L   | 0.454      | -            | -                | -                | -         |    -5.11 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     3177 | 2024-03-14 | 1WIN Gang         | W   | 0.320      | -            | -                | -                | -         |     2.62 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     3379 | 2024-03-06 | Fearless Cheetahs | W   | 0.267      | -            | -                | -                | -         |     2.52 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     3600 | 2024-02-25 | BIG EQUIPA        | W   | 0.200      | 0.238        | 0.022 (0.001)    | 0.186 (0.009)    | -         |     2.71 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3604 | 2024-02-25 | ENCE Athena       | W   | 0.199      | -            | -                | -                | -         |     1.60 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3638 | 2024-02-24 | Crescent fe       | W   | 0.192      | -            | -                | -                | -         |     1.73 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     4017 | 2024-02-04 | EK Violet         | W   | 0.060      | -            | -                | -                | -         |     0.24 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,561.70)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.854 | $7,000.00      | $5,980.58       |
| 2024-05-19 |      0.760 | $2,000.00      | $1,519.40       |
| 2024-04-16 |      0.540 | $3,500.00      | $1,890.94       |
| 2024-02-25 |      0.200 | $630.00        | $125.74         |
| 2024-02-04 |      0.060 | $750.00        | $45.04          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
