### Roster Details<br />
Team Name: Arcade<br />
Roster: apocdud, foggers, Kobe, TRIPLUS, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [21]( ../standings_asia.md)<br />
Final Rank Value:  633.8<br />
<br />
Final Rank Value (633.8) = Starting Rank Value (681.3) + Head To Head Adjustments (-47.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.3
- 400 + ( ( 0.138 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 681.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     1128 | 2024-05-15 | Bad News Kangaroos | L   | 0.973      | -            | -                | -                | -         |    -5.96 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           31 |     1131 | 2024-05-15 | Bad News Kangaroos | L   | 0.973      | -            | -                | -                | -         |    -6.30 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           30 |     1320 | 2024-05-08 | Mindfreak          | L   | 0.927      | -            | -                | -                | -         |    -9.00 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           29 |     1322 | 2024-05-08 | Mindfreak          | L   | 0.927      | -            | -                | -                | -         |    -9.66 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           28 |     1338 | 2024-05-07 | DXA                | L   | 0.921      | -            | -                | -                | -         |   -15.91 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           27 |     1340 | 2024-05-07 | DXA                | W   | 0.920      | 0.333        | 0.004 (0.001)    | 0.179 (0.055)    | 0 (0.000) |    13.06 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           26 |     1830 | 2024-04-17 | Rooster            | L   | 0.788      | -            | -                | -                | -         |    -6.51 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           25 |     1843 | 2024-04-17 | Vantage            | W   | 0.787      | 0.143        | 0.003 (0.000)    | 0.166 (0.019)    | 0 (0.000) |    13.89 | Drox, N1ghtraid, Omichella, SkulL, vision   |
|           24 |     2005 | 2024-04-10 | Vantage            | L   | 0.740      | -            | -                | -                | -         |   -10.32 | Drox, N1ghtraid, Omichella, SkulL, vision   |
|           23 |     2012 | 2024-04-10 | Vantage            | L   | 0.740      | -            | -                | -                | -         |   -11.01 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           22 |     2240 | 2024-04-03 | FlyQuest           | L   | 0.693      | -            | -                | -                | -         |    -0.44 | aliStair, dexter, INS, Liazz, Vexite        |
|           21 |     2244 | 2024-04-03 | FlyQuest           | L   | 0.693      | -            | -                | -                | -         |    -0.44 | apocdud, foggers, Kobe, TRIPLUS, void       |
|           20 |     2367 | 2024-03-27 | Rooster            | L   | 0.647      | -            | -                | -                | -         |    -5.91 | asap, chelleos, dangeR, nettik, TjP         |
|           19 |     2370 | 2024-03-27 | Rooster            | L   | 0.647      | -            | -                | -                | -         |    -6.20 | apocdud, foggers, kibstar, Kobe, void       |
|           18 |     2415 | 2024-03-23 | KZG                | L   | 0.620      | -            | -                | -                | -         |   -10.67 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs   |
|           17 |     2417 | 2024-03-23 | Bad News Kangaroos | L   | 0.620      | -            | -                | -                | -         |    -5.74 | apocdud, foggers, Kobe, rekonz, void        |
|           16 |     2810 | 2024-03-06 | KZG                | W   | 0.507      | 0.333        | 0.009 (0.002)    | 0.142 (0.024)    | 0 (0.000) |     7.60 | Estate, Hassie, Mingovi, pain, Samuukxs     |
|           15 |     2817 | 2024-03-06 | KZG                | W   | 0.507      | 0.333        | 0.009 (0.002)    | 0.142 (0.024)    | 0 (0.000) |     7.95 | apocdud, foggers, Kobe, void, yourwombat    |
|           14 |     2985 | 2024-02-27 | Canon Event        | W   | 0.453      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.63 | Blizz, BoBo, Coppo, Kras, mitzy             |
|           13 |     2987 | 2024-02-27 | Canon Event        | W   | 0.453      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.75 | apocdud, damyo, foggers, Kobe, void         |
|           12 |     3122 | 2024-02-21 | Vantage            | L   | 0.413      | -            | -                | -                | -         |    -6.82 | Drox, Omichella, SkulL, viridian, vision    |
|           11 |     3143 | 2024-02-20 | Cringexe           | W   | 0.407      | 0.143        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     3.34 | BROJVHS, Havoc, luffy, Mr Shark, Winnieeeee |
|           10 |     3145 | 2024-02-20 | gfg123321          | W   | 0.407      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     2.09 | BaN4na, dcey, neo, nub, sunshinez           |
|            9 |     3189 | 2024-02-18 | FlyQuest           | L   | 0.393      | -            | -                | -                | -         |    -0.26 | apocdud, damyo, foggers, Kobe, void         |
|            8 |     3190 | 2024-02-18 | KZG                | W   | 0.393      | 0.143        | 0.009 (0.001)    | 0.142 (0.008)    | 0 (0.000) |     6.91 | dpr, Hassie, Lexon, Mingovi, Samuukxs       |
|            7 |     3193 | 2024-02-17 | FlyQuest           | L   | 0.391      | -            | -                | -                | -         |    -0.25 | apocdud, damyo, foggers, Kobe, void         |
|            6 |     3216 | 2024-02-16 | LYG                | W   | 0.385      | 0.303        | 0.005 (0.001)    | 0.064 (0.007)    | 0 (0.000) |     6.80 | apocdud, damyo, foggers, Kobe, void         |
|            5 |     3336 | 2024-02-13 | DXA                | L   | 0.361      | -            | -                | -                | -         |    -5.35 | apocdud, damyo, foggers, Kobe, SaVage       |
|            4 |     3338 | 2024-02-13 | disciples          | W   | 0.360      | -            | -                | -                | -         |     1.92 | badger, DickStacy, mswag, stevie, Texta     |
|            3 |     3902 | 2024-01-18 | Mindfreak          | L   | 0.187      | -            | -                | -                | -         |    -4.17 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            2 |     3904 | 2024-01-18 | sunday school      | W   | 0.186      | 0.143        | -                | 0.018 (0.000)    | -         |     1.51 | apocdud, damyo, foggers, Kobe, yourwombat   |
|            1 |     3951 | 2024-01-17 | disciples          | W   | 0.180      | -            | -                | -                | -         |     0.97 | apocdud, damyo, foggers, Kobe, yourwombat   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,499.81)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $600.00        | $600.00         |
| 2024-03-23 |      0.620 | $662.00        | $410.66         |
| 2024-02-17 |      0.391 | $1,250.00      | $489.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
