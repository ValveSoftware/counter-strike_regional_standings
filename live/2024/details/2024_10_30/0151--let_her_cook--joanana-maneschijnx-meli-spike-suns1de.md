### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: Joanana, ManeschijnX, meli, spike, suns1de<br />
Global Rank: [151](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [102]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  726.4<br />
<br />
Final Rank Value (726.4) = Starting Rank Value (762.3) + Head To Head Adjustments (-36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.3
- 400 + ( ( 0.183 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 762.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      163 | 2024-10-20 | NAVI Javelins | L   | 1.000      | -            | -                | -                | -         |   -12.47 | Joanana, ManeschijnX, meli, spike, suns1de |
|           11 |      198 | 2024-10-19 | BIG EQUIPA    | L   | 1.000      | -            | -                | -                | -         |   -17.45 | Joanana, ManeschijnX, meli, spike, suns1de |
|           10 |      221 | 2024-10-18 | NIP Impact    | W   | 1.000      | 0.328        | 0.003 (0.001)    | 0.182 (0.060)    | 0 (0.000) |    15.14 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            9 |      850 | 2024-09-26 | ENCE Athena   | W   | 0.974      | 0.328        | 0.004 (0.001)    | 0.023 (0.007)    | 0 (0.000) |     9.45 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            8 |     1107 | 2024-09-19 | Astralis W    | L   | 0.927      | -            | -                | -                | -         |   -17.55 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            7 |     1219 | 2024-09-15 | Spirit fe     | L   | 0.900      | -            | -                | -                | -         |   -17.38 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            6 |     1349 | 2024-09-11 | Spirit fe     | W   | 0.874      | 0.328        | 0.014 (0.004)    | 0.166 (0.048)    | 0 (0.000) |    10.93 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            5 |     1702 | 2024-08-29 | NAVI Javelins | L   | 0.787      | -            | -                | -                | -         |   -12.53 | aiveri, Hikomi, Joanana, ManeschijnX, meli |
|            4 |     4169 | 2024-06-02 | Imperial fe   | L   | 0.201      | -            | -                | -                | -         |    -2.71 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            3 |     4173 | 2024-06-02 | HSG fe        | W   | 0.201      | 0.524        | 0.020 (0.002)    | 0.103 (0.011)    | 1 (0.201) |     2.84 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            2 |     4230 | 2024-05-31 | Fluxo Demons  | W   | 0.188      | 0.524        | 0.021 (0.002)    | 0.201 (0.020)    | 1 (0.188) |     2.87 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            1 |     4241 | 2024-05-31 | NAVI Javelins | W   | 0.187      | 0.524        | 0.018 (0.002)    | 0.207 (0.020)    | 1 (0.187) |     2.91 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,957.88)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $1,700.00      | $1,700.00       |
| 2024-09-15 |      0.900 | $250.00        | $224.97         |
| 2024-06-02 |      0.201 | $25,000.00     | $5,032.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
