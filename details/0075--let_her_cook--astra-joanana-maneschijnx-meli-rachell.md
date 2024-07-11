### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  1000.3<br />
<br />
Final Rank Value (1000.3) = Starting Rank Value (1018.9) + Head To Head Adjustments (-18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.490[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.324[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1018.9
- 400 + ( ( 0.293 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1018.9


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
|           15 |      713 | 2024-06-02 | Imperial fe       | L   | 0.941      | -            | -                | -                | -         |    -9.10 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           14 |      717 | 2024-06-02 | HSG fe            | W   | 0.940      | 0.524        | 0.047 (0.023)    | 0.092 (0.045)    | 1 (0.940) |    11.09 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           13 |      774 | 2024-05-31 | Fluxo Demons      | W   | 0.928      | 0.524        | 0.048 (0.023)    | 0.224 (0.109)    | 1 (0.928) |    12.31 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           12 |      785 | 2024-05-31 | NAVI Javelins     | W   | 0.927      | 0.524        | 0.042 (0.020)    | 0.266 (0.129)    | 1 (0.927) |    13.00 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |     1825 | 2024-04-20 | ex-GUILD fe       | W   | 0.653      | 0.331        | 0.004 (0.001)    | 0.099 (0.021)    | 0 (0.000) |     3.70 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |     1864 | 2024-04-19 | Spirit fe         | W   | 0.647      | 0.331        | 0.004 (0.001)    | 0.043 (0.009)    | 0 (0.000) |     2.87 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     2083 | 2024-04-11 | NIP Impact        | L   | 0.593      | -            | -                | -                | -         |   -14.37 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |     2126 | 2024-04-10 | 1WIN Gang         | L   | 0.587      | -            | -                | -                | -         |   -15.85 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |     2183 | 2024-04-09 | Spirit fe         | W   | 0.580      | 0.303        | 0.004 (0.001)    | 0.043 (0.008)    | 0 (0.000) |     2.43 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |     2267 | 2024-04-06 | Fearless Cheetahs | L   | 0.558      | -            | -                | -                | -         |   -14.37 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     2348 | 2024-04-03 | NAVI Javelins     | W   | 0.541      | 0.331        | 0.042 (0.007)    | 0.266 (0.048)    | 0 (0.000) |     5.92 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            4 |     2569 | 2024-03-21 | Fearless Cheetahs | L   | 0.454      | -            | -                | -                | -         |   -12.00 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     2752 | 2024-03-13 | Crescent fe       | W   | 0.401      | 0.331        | 0.007 (0.001)    | 0.107 (0.014)    | 0 (0.000) |     1.78 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     3153 | 2024-02-25 | BIG EQUIPA        | L   | 0.285      | -            | -                | -                | -         |    -6.73 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            1 |     3183 | 2024-02-24 | Nemesis fe        | W   | 0.279      | 0.238        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.75 | Joanana, kezziwow, meli, RacheLL, suns1de  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,530.08)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
