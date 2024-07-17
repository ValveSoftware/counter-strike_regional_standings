### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1363.5<br />
<br />
Final Rank Value (1363.5) = Starting Rank Value (1392.2) + Head To Head Adjustments (-28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.597[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.571[<sup>2</sup>](#table1)

The average of these factors is 0.462<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1392.2
- 400 + ( ( 0.462 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1392.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      367 | 2024-06-15 | Permitta      | L   | 0.985      | -            | -                | -                | -         |   -28.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           39 |      393 | 2024-06-14 | Space         | W   | 0.980      | 0.435        | -                | 0.430 (0.183)    | 0 (0.000) |     2.27 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           38 |      722 | 2024-06-06 | fnatic        | L   | 0.927      | -            | -                | -                | -         |   -11.08 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           37 |      754 | 2024-06-06 | Eternal Fire  | L   | 0.925      | -            | -                | -                | -         |    -5.13 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |      785 | 2024-06-05 | BetBoom       | L   | 0.921      | -            | -                | -                | -         |   -11.32 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           35 |      799 | 2024-06-05 | Complexity    | L   | 0.919      | -            | -                | -                | -         |    -2.88 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           34 |      809 | 2024-06-05 | FURIA         | W   | 0.919      | 0.715        | 0.253 (0.166)    | 0.483 (0.317)    | 1 (0.919) |    18.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           33 |      991 | 2024-05-29 | HEROIC        | L   | 0.875      | -            | -                | -                | -         |    -3.85 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           32 |     1001 | 2024-05-29 | Virtus.pro    | W   | 0.874      | 0.624        | 0.349 (0.191)    | 0.367 (0.200)    | 1 (0.874) |    23.60 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           31 |     1018 | 2024-05-28 | FlyQuest      | W   | 0.868      | 0.624        | 0.116 (0.063)    | 0.388 (0.210)    | 1 (0.868) |    13.38 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |     1042 | 2024-05-27 | Natus Vincere | L   | 0.861      | -            | -                | -                | -         |    -1.44 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     1237 | 2024-05-20 | MIBR          | L   | 0.813      | -            | -                | -                | -         |    -6.36 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           28 |     1256 | 2024-05-19 | Astralis      | L   | 0.808      | -            | -                | -                | -         |    -1.31 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           27 |     1632 | 2024-05-07 | G2            | L   | 0.727      | -            | -                | -                | -         |    -1.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           26 |     1694 | 2024-05-03 | HEROIC        | W   | 0.701      | 0.889        | 0.333 (0.208)    | 0.448 (0.279)    | 1 (0.701) |    19.59 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     1703 | 2024-05-03 | PERA          | W   | 0.699      | 0.889        | 0.067 (0.042)    | 0.454 (0.282)    | 1 (0.699) |     2.42 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     1730 | 2024-05-02 | Natus Vincere | L   | 0.693      | -            | -                | -                | -         |    -0.96 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     1755 | 2024-05-01 | BOSS          | W   | 0.686      | 0.889        | 0.022 (0.013)    | 0.345 (0.211)    | 1 (0.686) |     1.34 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     1966 | 2024-04-21 | BLEED         | L   | 0.619      | -            | -                | -                | -         |   -15.22 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     1992 | 2024-04-20 | GamerLegion   | W   | 0.613      | 0.384        | 0.244 (0.058)    | -                | -         |     6.19 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     2102 | 2024-04-18 | LEON          | W   | 0.598      | -            | -                | -                | -         |     0.54 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     2211 | 2024-04-13 | OG            | L   | 0.566      | -            | -                | -                | -         |   -13.44 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           18 |     2220 | 2024-04-12 | FORZE         | W   | 0.561      | 0.684        | 0.095 (0.036)    | 0.269 (0.103)    | -         |     2.28 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           17 |     2291 | 2024-04-10 | Gods Reign    | W   | 0.547      | 0.684        | 0.065 (0.024)    | 0.277 (0.104)    | -         |     0.92 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           16 |     2350 | 2024-04-09 | BetBoom       | L   | 0.540      | -            | -                | -                | -         |    -3.97 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           15 |     2529 | 2024-04-03 | EYEBALLERS    | W   | 0.499      | 0.384        | -                | 0.619 (0.119)    | -         |     1.27 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           14 |     3009 | 2024-03-09 | Spirit        | L   | 0.335      | -            | -                | -                | -         |    -0.32 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           13 |     3038 | 2024-03-08 | GamerLegion   | W   | 0.327      | -            | -                | -                | -         |     0.85 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           12 |     3172 | 2024-03-03 | Young Ninjas  | L   | 0.294      | -            | -                | -                | -         |    -8.88 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           11 |     3230 | 2024-03-01 | AMKAL         | W   | 0.279      | 0.500        | 0.134 (0.019)    | -                | -         |     1.61 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           10 |     3257 | 2024-02-28 | BLEED         | L   | 0.265      | -            | -                | -                | -         |    -7.22 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            9 |     3781 | 2024-02-02 | Apeks         | L   | 0.095      | -            | -                | -                | -         |    -2.63 | Krimbo, mantuu, prosus, s1n, tabseN |
|            8 |     3836 | 2024-01-31 | HEROIC        | L   | 0.081      | -            | -                | -                | -         |    -0.30 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |     3843 | 2024-01-31 | ENCE          | W   | 0.080      | -            | -                | -                | 1 (0.080) |     1.46 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |     3883 | 2024-01-28 | Astralis      | L   | 0.060      | -            | -                | -                | -         |    -0.10 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     3891 | 2024-01-27 | Virtus.pro    | L   | 0.054      | -            | -                | -                | -         |    -0.21 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     3907 | 2024-01-26 | Cloud9        | W   | 0.048      | -            | -                | -                | 1 (0.048) |     0.39 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     3930 | 2024-01-25 | HEROIC        | W   | 0.042      | -            | -                | -                | 1 (0.042) |     1.16 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     3947 | 2024-01-24 | Virtus.pro    | L   | 0.034      | -            | -                | -                | -         |    -0.13 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     4070 | 2024-01-20 | Nexus         | L   | 0.006      | -            | -                | -                | -         |    -0.18 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($51,980.95)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $2,000.00      | $1,987.56       |
| 2024-06-09 |      0.947 | $8,000.00      | $7,575.78       |
| 2024-06-02 |      0.901 | $6,000.00      | $5,408.36       |
| 2024-05-12 |      0.760 | $17,500.00     | $13,304.29      |
| 2024-04-14 |      0.574 | $35,000.00     | $20,080.23      |
| 2024-03-10 |      0.341 | $7,500.00      | $2,560.36       |
| 2024-02-02 |      0.095 | $4,500.00      | $426.95         |
| 2024-01-28 |      0.061 | $10,500.00     | $637.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
