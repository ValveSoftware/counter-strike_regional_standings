### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: Joanana, ManeschijnX, meli, spike, suns1de<br />
Global Rank: [158](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [104]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  681.9<br />
<br />
Final Rank Value (681.9) = Starting Rank Value (713.3) + Head To Head Adjustments (-31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.3
- 400 + ( ( 0.160 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 713.3


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
|           12 |      304 | 2024-10-20 | NAVI Javelins | L   | 1.000      | -            | -                | -                | -         |   -12.42 | Joanana, ManeschijnX, meli, spike, suns1de |
|           11 |      339 | 2024-10-19 | BIG EQUIPA    | L   | 1.000      | -            | -                | -                | -         |   -17.02 | Joanana, ManeschijnX, meli, spike, suns1de |
|           10 |      362 | 2024-10-18 | NIP Impact    | W   | 1.000      | 0.328        | 0.001 (0.000)    | 0.183 (0.060)    | 0 (0.000) |    15.74 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            9 |      991 | 2024-09-26 | ENCE Athena   | W   | 0.928      | 0.328        | 0.002 (0.001)    | 0.023 (0.007)    | 0 (0.000) |    10.00 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            8 |     1248 | 2024-09-19 | Astralis W    | L   | 0.881      | -            | -                | -                | -         |   -15.90 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            7 |     1360 | 2024-09-15 | Spirit fe     | L   | 0.854      | -            | -                | -                | -         |   -15.79 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            6 |     1490 | 2024-09-11 | Spirit fe     | W   | 0.828      | 0.328        | 0.007 (0.002)    | 0.171 (0.046)    | 0 (0.000) |    11.14 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            5 |     1843 | 2024-08-29 | NAVI Javelins | L   | 0.741      | -            | -                | -                | -         |   -11.61 | aiveri, Hikomi, Joanana, ManeschijnX, meli |
|            4 |     4310 | 2024-06-02 | Imperial fe   | L   | 0.155      | -            | -                | -                | -         |    -2.17 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            3 |     4314 | 2024-06-02 | HSG fe        | W   | 0.154      | 0.524        | 0.009 (0.001)    | 0.106 (0.009)    | 1 (0.154) |     2.25 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            2 |     4371 | 2024-05-31 | Fluxo Demons  | W   | 0.142      | 0.524        | 0.009 (0.001)    | 0.201 (0.015)    | 1 (0.142) |     2.21 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            1 |     4382 | 2024-05-31 | NAVI Javelins | W   | 0.141      | 0.524        | 0.008 (0.001)    | 0.211 (0.016)    | 1 (0.141) |     2.22 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,791.41)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $1,700.00      | $1,700.00       |
| 2024-09-15 |      0.854 | $250.00        | $213.42         |
| 2024-06-02 |      0.155 | $25,000.00     | $3,877.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
