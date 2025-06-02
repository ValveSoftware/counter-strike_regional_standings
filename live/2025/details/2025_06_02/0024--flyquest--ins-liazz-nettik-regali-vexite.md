### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, Liazz, nettik, regali, Vexite<br />
Global Rank: [24](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  1212.7<br />
<br />
Final Rank Value (1212.7) = Starting Rank Value (1175.6) + Head To Head Adjustments (37.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.583[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.143[<sup>2</sup>](#table1)
- LAN Wins: 0.537[<sup>2</sup>](#table1)

The average of these factors is 0.423<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1175.6
- 400 + ( ( 0.423 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 1175.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      235 | 2025-05-16 | JiJieHao      | W   | 1.000      | 0.657        | 0.079 (0.052)    | 0.443 (0.291)    | 1 (1.000) |    12.10 | INS, Liazz, nettik, regali, Vexite |
|           24 |      363 | 2025-05-11 | TYLOO         | L   | 1.000      | -            | -                | -                | -         |   -10.37 | INS, Liazz, nettik, regali, Vexite |
|           23 |      391 | 2025-05-10 | Rare Atom     | W   | 1.000      | 0.657        | 0.074 (0.048)    | 0.703 (0.462)    | 1 (1.000) |    15.58 | INS, Liazz, nettik, regali, Vexite |
|           22 |      415 | 2025-05-09 | TYLOO         | L   | 1.000      | -            | -                | -                | -         |   -10.65 | INS, Liazz, nettik, regali, Vexite |
|           21 |      469 | 2025-05-07 | NomadS        | W   | 1.000      | 0.657        | 0.021 (0.014)    | 0.264 (0.173)    | 1 (1.000) |     4.23 | INS, Liazz, nettik, regali, Vexite |
|           20 |      601 | 2025-05-01 | FaZe          | L   | 0.991      | -            | -                | -                | -         |    -2.34 | INS, Liazz, nettik, regali, Vexite |
|           19 |      647 | 2025-04-30 | Spirit        | L   | 0.983      | -            | -                | -                | -         |    -0.58 | INS, Liazz, nettik, regali, Vexite |
|           18 |      781 | 2025-04-22 | Natus Vincere | L   | 0.935      | -            | -                | -                | -         |    -2.23 | INS, Liazz, nettik, regali, Vexite |
|           17 |      795 | 2025-04-22 | Virtus.pro    | W   | 0.929      | 1.000        | 0.324 (0.301)    | 0.352 (0.327)    | 1 (0.929) |    25.11 | INS, Liazz, nettik, regali, Vexite |
|           16 |      808 | 2025-04-21 | Vitality      | L   | 0.922      | -            | -                | -                | -         |    -0.21 | INS, Liazz, nettik, regali, Vexite |
|           15 |      899 | 2025-04-17 | SemperFi      | W   | 0.895      | 0.143        | 0.010 (0.001)    | 0.242 (0.031)    | 0 (0.000) |     5.68 | INS, Liazz, nettik, regali, Vexite |
|           14 |      925 | 2025-04-15 | SemperFi      | W   | 0.887      | 0.143        | 0.010 (0.001)    | 0.242 (0.031)    | 0 (0.000) |     5.66 | INS, Liazz, nettik, regali, Vexite |
|           13 |      948 | 2025-04-15 | Rooster       | W   | 0.882      | 0.143        | 0.010 (0.001)    | 0.317 (0.040)    | 0 (0.000) |     3.09 | INS, Liazz, nettik, regali, Vexite |
|           12 |     2350 | 2025-03-05 | TYLOO         | L   | 0.611      | -            | -                | -                | -         |    -4.65 | dexter, INS, Liazz, regali, Vexite |
|           11 |     2369 | 2025-03-04 | Aurora        | L   | 0.604      | -            | -                | -                | -         |    -0.35 | dexter, INS, Liazz, regali, Vexite |
|           10 |     2381 | 2025-03-03 | paiN          | W   | 0.599      | 0.143        | 0.226 (0.019)    | 0.235 (0.020)    | 1 (0.599) |    12.59 | dexter, INS, Liazz, regali, Vexite |
|            9 |     2414 | 2025-03-02 | Lynn Vision   | W   | 0.589      | 0.143        | 0.184 (0.015)    | 0.525 (0.044)    | 1 (0.589) |     9.07 | dexter, INS, Liazz, regali, Vexite |
|            8 |     2446 | 2025-03-01 | M80           | L   | 0.583      | -            | -                | -                | -         |   -14.14 | dexter, INS, Liazz, regali, Vexite |
|            7 |     2810 | 2025-02-16 | SAW           | L   | 0.498      | -            | -                | -                | -         |    -9.50 | dexter, INS, Liazz, regali, Vexite |
|            6 |     2853 | 2025-02-15 | BIG           | L   | 0.489      | -            | -                | -                | -         |    -4.94 | dexter, INS, Liazz, regali, Vexite |
|            5 |     2877 | 2025-02-14 | Falcons       | L   | 0.484      | -            | -                | -                | -         |    -0.24 | dexter, INS, Liazz, regali, Vexite |
|            4 |     3239 | 2025-01-30 | Astralis      | L   | 0.385      | -            | -                | -                | -         |    -0.66 | dexter, INS, Liazz, regali, Vexite |
|            3 |     3255 | 2025-01-29 | 3DMAX         | L   | 0.376      | -            | -                | -                | -         |    -1.10 | dexter, INS, Liazz, regali, Vexite |
|            2 |     3476 | 2025-01-18 | Spirit        | L   | 0.305      | -            | -                | -                | -         |    -0.17 | dexter, INS, Liazz, regali, Vexite |
|            1 |     3494 | 2025-01-14 | MIBR          | W   | 0.277      | 0.143        | 0.238 (0.009)    | 0.310 (0.012)    | 0 (0.000) |     6.10 | dexter, INS, Liazz, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($85,862.19)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-16 |      1.000 | $40,000.00     | $40,000.00      |
| 2025-05-04 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-04-27 |      0.963 | $25,000.00     | $24,080.28      |
| 2025-03-05 |      0.613 | $6,500.00      | $3,981.29       |
| 2025-02-23 |      0.546 | $12,500.00     | $6,821.21       |
| 2025-01-31 |      0.392 | $2,500.00      | $979.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
