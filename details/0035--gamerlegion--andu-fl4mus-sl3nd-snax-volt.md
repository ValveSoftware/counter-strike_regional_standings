### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, FL4MUS, sl3nd, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1181.9<br />
<br />
Final Rank Value (1181.9) = Starting Rank Value (1181.2) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.592[<sup>1</sup>](#table2)
- Bounty Collected: 0.472[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.386<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1181.2
- 400 + ( ( 0.386 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1181.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      638 | 2024-06-15 | 5W                | L   | 0.940      | -            | -                | -                | -         |   -21.99 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           21 |      680 | 2024-06-14 | Endpoint          | W   | 0.933      | 0.450        | -                | 0.466 (0.196)    | 0 (0.000) |     4.07 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           20 |      711 | 2024-06-13 | Illuminar         | L   | 0.927      | -            | -                | -                | -         |   -24.85 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           19 |      884 | 2024-06-08 | 5W                | W   | 0.894      | 0.450        | 0.103 (0.042)    | -                | 0 (0.000) |     5.33 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           18 |      941 | 2024-06-07 | MOUZ NXT          | W   | 0.887      | 0.450        | 0.169 (0.068)    | 1.000 (0.399)    | 0 (0.000) |    10.19 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           17 |     1002 | 2024-06-06 | ECLOT             | W   | 0.880      | 0.450        | 0.084 (0.033)    | 0.510 (0.202)    | 0 (0.000) |    10.15 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           16 |     1238 | 2024-05-31 | GUN5              | L   | 0.840      | -            | -                | -                | -         |   -21.75 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           15 |     1447 | 2024-05-22 | Eternal Fire      | L   | 0.779      | -            | -                | -                | -         |    -1.98 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           14 |     1477 | 2024-05-21 | AMKAL             | W   | 0.774      | 0.769        | 0.111 (0.066)    | 0.515 (0.307)    | 0 (0.000) |    11.35 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           13 |     1588 | 2024-05-18 | fnatic            | W   | 0.752      | 0.769        | 0.428 (0.247)    | 0.666 (0.385)    | 0 (0.000) |    19.93 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           12 |     1609 | 2024-05-17 | Gaimin Gladiators | W   | 0.747      | 0.769        | 0.053 (0.031)    | 0.432 (0.248)    | 0 (0.000) |     7.39 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           11 |     1914 | 2024-05-07 | Virtus.pro        | L   | 0.680      | -            | -                | -                | -         |    -0.85 | aNdu, isak, sl3nd, Snax, volt   |
|           10 |     1988 | 2024-05-03 | ENCE              | W   | 0.653      | 0.889        | 0.171 (0.099)    | 0.380 (0.221)    | 1 (0.653) |    14.82 | aNdu, isak, sl3nd, Snax, volt   |
|            9 |     2005 | 2024-05-02 | FORZE             | W   | 0.647      | 0.889        | 0.078 (0.045)    | 0.233 (0.134)    | 1 (0.647) |     5.52 | aNdu, isak, sl3nd, Snax, volt   |
|            8 |     2037 | 2024-05-01 | MOUZ              | L   | 0.639      | -            | -                | -                | -         |    -0.28 | aNdu, isak, sl3nd, Snax, volt   |
|            7 |     2065 | 2024-04-30 | ENCE              | W   | 0.632      | 0.889        | 0.171 (0.096)    | 0.380 (0.214)    | 1 (0.632) |    15.02 | aNdu, isak, sl3nd, Snax, volt   |
|            6 |     2280 | 2024-04-20 | BIG               | L   | 0.566      | -            | -                | -                | -         |    -5.92 | aNdu, Goody, sl3nd, Snax, volt  |
|            5 |     2370 | 2024-04-18 | Sashi             | L   | 0.553      | -            | -                | -                | -         |    -9.87 | aNdu, isak, sl3nd, Snax, volt   |
|            4 |     2447 | 2024-04-16 | MOUZ NXT          | W   | 0.539      | 0.384        | 0.169 (0.035)    | 1.000 (0.207)    | -         |     6.20 | aNdu, isak, sl3nd, Snax, volt   |
|            3 |     2839 | 2024-04-02 | Monte             | L   | 0.447      | -            | -                | -                | -         |    -9.44 | aNdu, isak, sl3nd, Snax, volt   |
|            2 |     2848 | 2024-04-02 | FAVBET            | L   | 0.446      | -            | -                | -                | -         |   -12.56 | aNdu, isak, sl3nd, Snax, volt   |
|            1 |     2868 | 2024-04-01 | GUN5              | W   | 0.439      | -            | -                | -                | -         |     0.17 | aNdu, isak, sl3nd, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,565.77)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.952 | $5,000.00      | $4,761.32       |
| 2024-05-23 |      0.787 | $50,000.00     | $39,326.60      |
| 2024-05-12 |      0.713 | $17,500.00     | $12,477.85      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
