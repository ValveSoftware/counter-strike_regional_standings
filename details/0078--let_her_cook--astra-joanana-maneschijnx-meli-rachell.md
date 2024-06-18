### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  968.8<br />
<br />
Final Rank Value (968.8) = Starting Rank Value (991.3) + Head To Head Adjustments (-22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.313[<sup>2</sup>](#table1)

The average of these factors is 0.291<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 991.3
- 400 + ( ( 0.291 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 991.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      577 | 2024-06-02 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -9.73 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           14 |      581 | 2024-06-02 | HSG fe            | W   | 1.000      | 0.524        | 0.043 (0.023)    | 0.090 (0.047)    | 1 (1.000) |    12.20 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           13 |      640 | 2024-05-31 | Fluxo Demons      | W   | 1.000      | 0.524        | 0.044 (0.023)    | 0.244 (0.128)    | 1 (1.000) |    14.16 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           12 |      651 | 2024-05-31 | NAVI Javelins     | W   | 1.000      | 0.524        | 0.041 (0.021)    | 0.290 (0.152)    | 1 (1.000) |    15.61 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |     1691 | 2024-04-20 | ex-GUILD fe       | W   | 0.809      | 0.331        | 0.005 (0.001)    | 0.114 (0.030)    | 0 (0.000) |     5.32 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |     1730 | 2024-04-19 | Spirit fe         | W   | 0.803      | 0.331        | 0.005 (0.001)    | 0.054 (0.014)    | 0 (0.000) |     4.03 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     1949 | 2024-04-11 | NIP Impact        | L   | 0.749      | -            | -                | -                | -         |   -17.14 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |     1992 | 2024-04-10 | 1WIN Gang         | L   | 0.743      | -            | -                | -                | -         |   -19.65 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |     2049 | 2024-04-09 | Spirit fe         | W   | 0.736      | 0.303        | 0.005 (0.001)    | 0.054 (0.012)    | 0 (0.000) |     3.48 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |     2133 | 2024-04-06 | Fearless Cheetahs | L   | 0.714      | -            | -                | -                | -         |   -17.63 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     2214 | 2024-04-03 | NAVI Javelins     | W   | 0.696      | 0.331        | 0.041 (0.009)    | 0.290 (0.067)    | 0 (0.000) |     8.40 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            4 |     2436 | 2024-03-21 | Fearless Cheetahs | L   | 0.610      | -            | -                | -                | -         |   -15.65 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     2619 | 2024-03-13 | Crescent fe       | W   | 0.557      | 0.331        | 0.007 (0.001)    | 0.109 (0.020)    | 0 (0.000) |     2.74 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     3020 | 2024-02-25 | BIG EQUIPA        | L   | 0.441      | -            | -                | -                | -         |   -10.12 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            1 |     3050 | 2024-02-24 | Nemesis fe        | W   | 0.435      | 0.238        | 0.001 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     1.47 | amyb, Emmy, Gaba, Ju, Lowlita              |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
