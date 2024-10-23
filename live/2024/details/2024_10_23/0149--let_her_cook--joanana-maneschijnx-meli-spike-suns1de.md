### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: Joanana, ManeschijnX, meli, spike, suns1de<br />
Global Rank: [149](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [100]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  728.7<br />
<br />
Final Rank Value (728.7) = Starting Rank Value (767.4) + Head To Head Adjustments (-38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.079[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 767.4
- 400 + ( ( 0.187 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 767.4


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
|           12 |       33 | 2024-10-20 | NAVI Javelins | L   | 1.000      | -            | -                | -                | -         |   -12.50 | Joanana, ManeschijnX, meli, spike, suns1de |
|           11 |       68 | 2024-10-19 | BIG EQUIPA    | L   | 1.000      | -            | -                | -                | -         |   -17.55 | Joanana, ManeschijnX, meli, spike, suns1de |
|           10 |       91 | 2024-10-18 | NIP Impact    | W   | 1.000      | 0.328        | 0.003 (0.001)    | 0.193 (0.063)    | 0 (0.000) |    14.93 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            9 |      720 | 2024-09-26 | ENCE Athena   | W   | 1.000      | 0.328        | 0.004 (0.001)    | 0.025 (0.008)    | 0 (0.000) |     9.36 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            8 |      977 | 2024-09-19 | Astralis W    | L   | 0.973      | -            | -                | -                | -         |   -18.75 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            7 |     1089 | 2024-09-15 | Spirit fe     | L   | 0.946      | -            | -                | -                | -         |   -18.89 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            6 |     1219 | 2024-09-11 | Spirit fe     | W   | 0.920      | 0.328        | 0.010 (0.003)    | 0.139 (0.042)    | 0 (0.000) |    10.80 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            5 |     1572 | 2024-08-29 | NAVI Javelins | L   | 0.833      | -            | -                | -                | -         |   -13.42 | aiveri, Hikomi, Joanana, ManeschijnX, meli |
|            4 |     4039 | 2024-06-02 | Imperial fe   | L   | 0.247      | -            | -                | -                | -         |    -3.27 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            3 |     4043 | 2024-06-02 | HSG fe        | W   | 0.247      | 0.524        | 0.020 (0.003)    | 0.107 (0.014)    | 1 (0.247) |     3.45 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            2 |     4100 | 2024-05-31 | Fluxo Demons  | W   | 0.234      | 0.524        | 0.021 (0.003)    | 0.212 (0.026)    | 1 (0.234) |     3.53 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            1 |     4111 | 2024-05-31 | NAVI Javelins | W   | 0.233      | 0.524        | 0.018 (0.002)    | 0.217 (0.026)    | 1 (0.233) |     3.59 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,120.07)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $1,700.00      | $1,700.00       |
| 2024-09-15 |      0.946 | $250.00        | $236.47         |
| 2024-06-02 |      0.247 | $25,000.00     | $6,183.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
