### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Global Rank: [81](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
<br />
Final Rank Value:  935.9<br />
<br />
Final Rank Value (935.9) = Starting Rank Value (942.2) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.452[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.275[<sup>2</sup>](#table1)

The average of these factors is 0.263<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 942.2
- 400 + ( ( 0.263 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 942.2


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
|           15 |     1407 | 2024-06-02 | Imperial fe       | L   | 0.807      | -            | -                | -                | -         |    -8.43 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           14 |     1411 | 2024-06-02 | HSG fe            | W   | 0.806      | 0.524        | 0.032 (0.013)    | 0.071 (0.030)    | 1 (0.806) |     9.75 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           13 |     1468 | 2024-05-31 | panelinha         | W   | 0.794      | 0.524        | 0.033 (0.014)    | 0.159 (0.066)    | 1 (0.794) |    10.68 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           12 |     1479 | 2024-05-31 | NAVI Javelins     | W   | 0.793      | 0.524        | 0.027 (0.011)    | 0.194 (0.080)    | 1 (0.793) |    11.07 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |     2519 | 2024-04-20 | ex-GUILD fe       | W   | 0.519      | 0.331        | 0.003 (0.000)    | 0.067 (0.011)    | 0 (0.000) |     3.38 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |     2558 | 2024-04-19 | Spirit fe         | W   | 0.513      | 0.331        | 0.005 (0.001)    | 0.101 (0.017)    | 0 (0.000) |     2.98 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     2777 | 2024-04-11 | NIP Impact        | L   | 0.459      | -            | -                | -                | -         |   -10.76 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |     2820 | 2024-04-10 | 1WIN Gang         | L   | 0.453      | -            | -                | -                | -         |   -11.73 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |     2877 | 2024-04-09 | Spirit fe         | W   | 0.446      | 0.303        | 0.005 (0.001)    | 0.101 (0.014)    | 0 (0.000) |     2.51 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |     2961 | 2024-04-06 | Fearless Cheetahs | L   | 0.424      | -            | -                | -                | -         |   -10.54 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     3042 | 2024-04-03 | NAVI Javelins     | W   | 0.406      | 0.331        | 0.027 (0.004)    | 0.194 (0.026)    | 0 (0.000) |     4.65 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            4 |     3263 | 2024-03-21 | Fearless Cheetahs | L   | 0.320      | -            | -                | -                | -         |    -8.12 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     3446 | 2024-03-13 | Crescent fe       | W   | 0.267      | 0.331        | 0.005 (0.000)    | 0.080 (0.007)    | 0 (0.000) |     1.51 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     3847 | 2024-02-25 | BIG EQUIPA        | L   | 0.151      | -            | -                | -                | -         |    -3.41 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            1 |     3877 | 2024-02-24 | Nemesis fe        | W   | 0.145      | 0.238        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.21 | Joanana, kezziwow, meli, RacheLL, suns1de  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,177.01)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
