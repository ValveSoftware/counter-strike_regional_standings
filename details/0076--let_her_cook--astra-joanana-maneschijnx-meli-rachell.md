### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  952.6<br />
<br />
Final Rank Value (952.6) = Starting Rank Value (963.1) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.474[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.299[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.1
- 400 + ( ( 0.278 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 963.1


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
|           15 |     1165 | 2024-06-02 | Imperial fe       | L   | 0.854      | -            | -                | -                | -         |    -8.64 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           14 |     1169 | 2024-06-02 | HSG fe            | W   | 0.854      | 0.524        | 0.040 (0.018)    | 0.081 (0.036)    | 1 (0.854) |    10.25 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           13 |     1226 | 2024-05-31 | Fluxo Demons      | W   | 0.841      | 0.524        | 0.040 (0.018)    | 0.188 (0.083)    | 1 (0.841) |    11.23 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           12 |     1237 | 2024-05-31 | NAVI Javelins     | W   | 0.840      | 0.524        | 0.035 (0.015)    | 0.227 (0.100)    | 1 (0.840) |    11.75 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |     2277 | 2024-04-20 | ex-GUILD fe       | W   | 0.566      | 0.331        | 0.003 (0.001)    | 0.081 (0.015)    | 0 (0.000) |     3.54 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |     2316 | 2024-04-19 | Spirit fe         | W   | 0.560      | 0.331        | 0.004 (0.001)    | 0.073 (0.013)    | 0 (0.000) |     2.91 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     2535 | 2024-04-11 | NIP Impact        | L   | 0.506      | -            | -                | -                | -         |   -11.97 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |     2578 | 2024-04-10 | 1WIN Gang         | L   | 0.500      | -            | -                | -                | -         |   -13.14 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |     2635 | 2024-04-09 | Spirit fe         | W   | 0.493      | 0.303        | 0.004 (0.001)    | 0.073 (0.011)    | 0 (0.000) |     2.45 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |     2719 | 2024-04-06 | Fearless Cheetahs | L   | 0.472      | -            | -                | -                | -         |   -11.86 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     2800 | 2024-04-03 | NAVI Javelins     | W   | 0.454      | 0.331        | 0.035 (0.005)    | 0.227 (0.034)    | 0 (0.000) |     5.11 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            4 |     3021 | 2024-03-21 | Fearless Cheetahs | L   | 0.367      | -            | -                | -                | -         |    -9.45 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     3204 | 2024-03-13 | Crescent fe       | W   | 0.314      | 0.331        | 0.006 (0.001)    | 0.092 (0.010)    | 0 (0.000) |     1.65 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     3605 | 2024-02-25 | BIG EQUIPA        | L   | 0.198      | -            | -                | -                | -         |    -4.54 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            1 |     3635 | 2024-02-24 | Nemesis fe        | W   | 0.192      | 0.238        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.25 | Joanana, kezziwow, meli, RacheLL, suns1de  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,359.20)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
