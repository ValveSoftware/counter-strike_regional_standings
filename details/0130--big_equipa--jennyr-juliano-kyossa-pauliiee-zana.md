### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  775.8<br />
<br />
Final Rank Value (775.8) = Starting Rank Value (785.0) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.0
- 400 + ( ( 0.190 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 785.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      134 | 2024-07-20 | dream catchers fe | L   | 1.000      | -            | -                | -                | -         |   -18.97 | JennyR, juliano, kyossa, pauliiee, Zana |
|           18 |     1190 | 2024-06-01 | HSG fe            | L   | 0.849      | -            | -                | -                | -         |   -10.92 | JennyR, juliano, kyossa, pauliiee, Zana |
|           17 |     1228 | 2024-05-31 | Imperial fe       | L   | 0.841      | -            | -                | -                | -         |    -4.80 | JennyR, juliano, kyossa, pauliiee, Zana |
|           16 |     1239 | 2024-05-31 | FlyQuest RED      | W   | 0.840      | 0.524        | 0.023 (0.010)    | 0.172 (0.076)    | 1 (0.840) |    12.74 | JennyR, juliano, kyossa, pauliiee, Zana |
|           15 |     1553 | 2024-05-19 | NAVI Javelins     | L   | 0.759      | -            | -                | -                | -         |    -9.63 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |     1580 | 2024-05-18 | Nemesis fe        | W   | 0.753      | 0.281        | -                | 0.000 (0.000)    | 0 (0.000) |     2.20 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |     2266 | 2024-04-20 | Fearless Cheetahs | W   | 0.567      | 0.331        | 0.004 (0.001)    | 0.079 (0.015)    | 0 (0.000) |     7.00 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |     2312 | 2024-04-19 | NIP Impact        | W   | 0.560      | 0.331        | 0.007 (0.001)    | 0.216 (0.040)    | 0 (0.000) |     7.48 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |     2701 | 2024-04-07 | Imperial fe       | L   | 0.479      | -            | -                | -                | -         |    -2.56 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     2716 | 2024-04-06 | Spirit fe         | W   | 0.472      | 0.262        | 0.004 (0.000)    | 0.073 (0.009)    | 0 (0.000) |     4.66 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     2766 | 2024-04-04 | ENCE Athena       | W   | 0.460      | 0.331        | 0.003 (0.000)    | 0.049 (0.007)    | 0 (0.000) |     4.55 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     2899 | 2024-03-28 | ex-GUILD fe       | L   | 0.414      | -            | -                | -                | -         |    -8.65 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     3174 | 2024-03-14 | Imperial fe       | L   | 0.321      | -            | -                | -                | -         |    -1.76 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     3382 | 2024-03-06 | Astralis W        | W   | 0.267      | 0.331        | 0.002 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     2.41 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     3458 | 2024-03-03 | dream catchers fe | W   | 0.247      | 0.250        | 0.019 (0.001)    | 0.182 (0.011)    | 0 (0.000) |     3.09 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     3600 | 2024-02-25 | NAVI Javelins     | L   | 0.200      | -            | -                | -                | -         |    -2.71 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     3605 | 2024-02-25 | Let Her Cook      | W   | 0.198      | 0.238        | 0.077 (0.004)    | 0.170 (0.008)    | 0 (0.000) |     4.54 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     3636 | 2024-02-24 | ex-GUILD fe       | W   | 0.192      | 0.238        | 0.003 (0.000)    | 0.081 (0.004)    | 0 (0.000) |     2.08 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     4169 | 2024-01-28 | QM fe             | W   | 0.013      | 0.250        | 0.000 (0.000)    | -                | -         |     0.07 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,176.09)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.854 | $7,000.00      | $5,980.58       |
| 2024-03-03 |      0.247 | $750.00        | $185.56         |
| 2024-01-28 |      0.013 | $750.00        | $9.95           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
