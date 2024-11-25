### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: Joanana, ManeschijnX, meli, spike, suns1de<br />
Global Rank: [165](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [113]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  701.0<br />
<br />
Final Rank Value (701.0) = Starting Rank Value (690.3) + Head To Head Adjustments (10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.3
- 400 + ( ( 0.145 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 690.3


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
|           12 |      742 | 2024-10-20 | NAVI Javelins | L   | 0.962      | -            | -                | -                | -         |    -1.28 | Joanana, ManeschijnX, meli, spike, suns1de |
|           11 |      777 | 2024-10-19 | BIG EQUIPA    | L   | 0.954      | -            | -                | -                | -         |    -9.42 | Joanana, ManeschijnX, meli, spike, suns1de |
|           10 |      800 | 2024-10-18 | NIP Impact    | W   | 0.948      | 0.328        | 0.019 (0.006)    | 0.180 (0.056)    | 0 (0.000) |    20.95 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            9 |     1429 | 2024-09-26 | ENCE Athena   | W   | 0.802      | 0.328        | 0.003 (0.001)    | 0.018 (0.005)    | 0 (0.000) |     9.62 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            8 |     1686 | 2024-09-19 | Denmark fe    | L   | 0.755      | -            | -                | -                | -         |    -8.75 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            7 |     1798 | 2024-09-15 | Spirit fe     | L   | 0.728      | -            | -                | -                | -         |   -11.84 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            6 |     1928 | 2024-09-11 | Spirit fe     | W   | 0.702      | 0.328        | 0.008 (0.002)    | 0.148 (0.034)    | 0 (0.000) |    10.89 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            5 |     2281 | 2024-08-29 | NAVI Javelins | L   | 0.615      | -            | -                | -                | -         |    -0.65 | aiveri, Hikomi, Joanana, ManeschijnX, meli |
|            4 |     4748 | 2024-06-02 | Imperial fe   | L   | 0.029      | -            | -                | -                | -         |    -0.08 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            3 |     4752 | 2024-06-02 | HSG fe        | W   | 0.028      | 0.524        | 0.006 (0.000)    | 0.088 (0.001)    | 1 (0.028) |     0.45 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            2 |     4809 | 2024-05-31 | Fluxo Demons  | W   | 0.016      | 0.524        | 0.024 (0.000)    | 0.198 (0.002)    | 1 (0.016) |     0.33 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            1 |     4820 | 2024-05-31 | NAVI Javelins | W   | 0.015      | 0.524        | 0.214 (0.002)    | 0.399 (0.003)    | 1 (0.015) |     0.45 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,545.76)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.962 | $1,700.00      | $1,634.63       |
| 2024-09-15 |      0.728 | $250.00        | $181.93         |
| 2024-06-02 |      0.029 | $25,000.00     | $729.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
