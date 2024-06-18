### Roster Details<br />
Team Name: ex-2GAME<br />
Roster: dok, dzt, leleo, spinnie, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
Final Rank Value:  706.5<br />
<br />
Final Rank Value (706.5) = Starting Rank Value (717.7) + Head To Head Adjustments (-11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.7
- 400 + ( ( 0.156 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 717.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      607 | 2024-06-01 | Case        | L   | 1.000      | -            | -                | -                | -         |    -8.11 | dok, dzt, leleo, spinnie, vhz               |
|           31 |      677 | 2024-05-30 | Solid       | L   | 1.000      | -            | -                | -                | -         |    -8.57 | dok, dzt, leleo, spinnie, vhz               |
|           30 |      737 | 2024-05-27 | Vikings KR  | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.239 (0.092)    | 0 (0.000) |    16.92 | beg0d, dok, dzt, spinnie, vhz               |
|           29 |      886 | 2024-05-21 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -3.89 | luchov, meyern, naz, Noktse, tomaszin       |
|           28 |      889 | 2024-05-21 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |    -4.04 | beg0d, dok, dzt, spinnie, vhz               |
|           27 |     1095 | 2024-05-15 | Fluxo       | L   | 0.977      | -            | -                | -                | -         |    -2.25 | arT, chayJESUS, Lucaozy, nicks, zevy        |
|           26 |     1097 | 2024-05-15 | Fluxo       | L   | 0.977      | -            | -                | -                | -         |    -2.31 | beg0d, dok, dzt, spinnie, vhz               |
|           25 |     1153 | 2024-05-14 | 9z          | L   | 0.970      | -            | -                | -                | -         |    -0.24 | buda, dgt, HUASOPEEK, MartinezSa, max       |
|           24 |     1158 | 2024-05-14 | 9z          | L   | 0.970      | -            | -                | -                | -         |    -0.24 | beg0d, dok, dzt, spinnie, vhz               |
|           23 |     1976 | 2024-04-10 | RED Canids  | L   | 0.744      | -            | -                | -                | -         |    -1.86 | dav1deuS, hardzao, nython, righi, venomzera |
|           22 |     1980 | 2024-04-10 | RED Canids  | L   | 0.744      | -            | -                | -                | -         |    -1.90 | beg0d, dok, dzt, santos, vhz                |
|           21 |     2138 | 2024-04-05 | adalYamigos | W   | 0.710      | 0.450        | 0.000 (0.000)    | 0.173 (0.055)    | 0 (0.000) |    12.20 | delboNi, f4stzin, piriajr, shz, zqkS        |
|           20 |     2139 | 2024-04-05 | adalYamigos | L   | 0.710      | -            | -                | -                | -         |   -10.31 | beg0d, dok, dzt, santos, vhz                |
|           19 |     2206 | 2024-04-03 | Sharks      | L   | 0.697      | -            | -                | -                | -         |    -3.81 | doc, drg, gafolo, rdnzao, togs              |
|           18 |     2209 | 2024-04-03 | Sharks      | L   | 0.697      | -            | -                | -                | -         |    -3.95 | beg0d, dok, dzt, santos, vhz                |
|           17 |     2342 | 2024-03-27 | Corinthians | W   | 0.651      | 0.450        | 0.008 (0.002)    | 0.191 (0.056)    | 0 (0.000) |     9.78 | abr, CutzMeretz, desh, legy, Leomonster     |
|           16 |     2345 | 2024-03-27 | Corinthians | L   | 0.651      | -            | -                | -                | -         |   -10.95 | beg0d, dok, dzt, santos, vhz                |
|           15 |     2383 | 2024-03-26 | Galorys     | L   | 0.644      | -            | -                | -                | -         |    -6.79 | detr0ittJ, happ, hoax, koala, ninjaZ        |
|           14 |     2385 | 2024-03-26 | Galorys     | L   | 0.644      | -            | -                | -                | -         |    -7.15 | beg0d, dok, dzt, santos, vhz                |
|           13 |     2466 | 2024-03-20 | Solid       | W   | 0.604      | 0.450        | 0.051 (0.014)    | 0.566 (0.154)    | 0 (0.000) |    13.83 | ALLE, CSO, gbb, Lcm, xureba                 |
|           12 |     2467 | 2024-03-20 | Solid       | L   | 0.603      | -            | -                | -                | -         |    -5.16 | beg0d, dok, dzt, santos, vhz                |
|           11 |     2551 | 2024-03-15 | ODDIK       | L   | 0.571      | -            | -                | -                | -         |    -3.79 | matios, naitte, ponter, Tuurtle, WOOD7      |
|           10 |     2552 | 2024-03-15 | ODDIK       | L   | 0.571      | -            | -                | -                | -         |    -3.92 | beg0d, dok, dzt, santos, vhz                |
|            9 |     2824 | 2024-03-05 | W7M         | W   | 0.504      | 0.450        | 0.001 (0.000)    | 0.364 (0.083)    | 0 (0.000) |     9.81 | fokiu, jz, saadzin, stormzyn, zede          |
|            8 |     2826 | 2024-03-05 | W7M         | W   | 0.504      | 0.450        | 0.001 (0.000)    | 0.364 (0.083)    | 0 (0.000) |    10.23 | beg0d, dok, dzt, santos, vhz                |
|            7 |     3030 | 2024-02-24 | Case        | L   | 0.437      | -            | -                | -                | -         |    -4.03 | RCF, RICIOLI, snow, urban0, yepz            |
|            6 |     3037 | 2024-02-24 | Case        | W   | 0.437      | 0.450        | 0.026 (0.005)    | 0.579 (0.114)    | 0 (0.000) |     9.96 | beg0d, dok, dzt, santos, vhz                |
|            5 |     3095 | 2024-02-21 | Imperial    | L   | 0.417      | -            | -                | -                | -         |    -0.12 | decenty, felps, HEN1, noway, VINI           |
|            4 |     3099 | 2024-02-21 | Imperial    | L   | 0.417      | -            | -                | -                | -         |    -0.12 | beg0d, dok, dzt, santos, vhz                |
|            3 |     3280 | 2024-02-14 | 9z          | L   | 0.371      | -            | -                | -                | -         |    -0.06 | buda, dgt, HUASOPEEK, MartinezSa, max       |
|            2 |     4149 | 2024-01-11 | adalYamigos | L   | 0.143      | -            | -                | -                | -         |    -2.84 | BRNZ1K, dok, dzt, santos, vhz               |
|            1 |     4156 | 2024-01-11 | Corinthians | W   | 0.143      | 0.143        | 0.008 (0.000)    | 0.191 (0.004)    | 0 (0.000) |     2.47 | BRNZ1K, dok, dzt, santos, vhz               |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($900.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
