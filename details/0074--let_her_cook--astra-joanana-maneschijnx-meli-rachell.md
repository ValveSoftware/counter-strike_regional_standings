### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: ASTRA, Joanana, ManeschijnX, meli, RacheLL<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  1003.8<br />
<br />
Final Rank Value (1003.8) = Starting Rank Value (1020.4) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.491[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.311[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1020.4
- 400 + ( ( 0.289 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1020.4


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
|           15 |      877 | 2024-06-02 | Imperial fe       | L   | 0.902      | -            | -                | -                | -         |    -8.76 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           14 |      881 | 2024-06-02 | HSG fe            | W   | 0.901      | 0.524        | 0.048 (0.023)    | 0.088 (0.041)    | 1 (0.901) |    10.59 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           13 |      938 | 2024-05-31 | Fluxo Demons      | W   | 0.889      | 0.524        | 0.048 (0.022)    | 0.210 (0.098)    | 1 (0.889) |    11.68 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           12 |      949 | 2024-05-31 | NAVI Javelins     | W   | 0.887      | 0.524        | 0.042 (0.019)    | 0.251 (0.117)    | 1 (0.887) |    12.24 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           11 |     1989 | 2024-04-20 | ex-GUILD fe       | W   | 0.614      | 0.331        | 0.004 (0.001)    | 0.091 (0.019)    | 0 (0.000) |     3.44 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|           10 |     2028 | 2024-04-19 | Spirit fe         | W   | 0.607      | 0.331        | 0.004 (0.001)    | 0.038 (0.008)    | 0 (0.000) |     2.69 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     2247 | 2024-04-11 | NIP Impact        | L   | 0.554      | -            | -                | -                | -         |   -13.49 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            8 |     2290 | 2024-04-10 | 1WIN Gang         | L   | 0.547      | -            | -                | -                | -         |   -14.76 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            7 |     2347 | 2024-04-09 | Spirit fe         | W   | 0.540      | 0.303        | 0.004 (0.001)    | 0.038 (0.006)    | 0 (0.000) |     2.27 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            6 |     2431 | 2024-04-06 | Fearless Cheetahs | L   | 0.519      | -            | -                | -                | -         |   -13.38 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            5 |     2512 | 2024-04-03 | NAVI Javelins     | W   | 0.501      | 0.331        | 0.042 (0.007)    | 0.251 (0.042)    | 0 (0.000) |     5.45 | ASTRA, Joanana, kezziwow, meli, RacheLL    |
|            4 |     2733 | 2024-03-21 | Fearless Cheetahs | L   | 0.415      | -            | -                | -                | -         |   -10.95 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            3 |     2916 | 2024-03-13 | Crescent fe       | W   | 0.361      | 0.331        | 0.007 (0.001)    | 0.101 (0.012)    | 0 (0.000) |     1.62 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            2 |     3317 | 2024-02-25 | BIG EQUIPA        | L   | 0.245      | -            | -                | -                | -         |    -5.79 | Joanana, kezziwow, meli, RacheLL, suns1de  |
|            1 |     3347 | 2024-02-24 | Nemesis fe        | W   | 0.240      | 0.238        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.59 | Joanana, kezziwow, meli, RacheLL, suns1de  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,539.83)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
