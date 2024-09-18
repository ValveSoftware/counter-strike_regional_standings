### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, rigoN, syrsoN, tabseN<br />
Global Rank: [23](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [16]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  1361.5<br />
<br />
Final Rank Value (1361.5) = Starting Rank Value (1425.3) + Head To Head Adjustments (-63.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.593[<sup>1</sup>](#table2)
- Bounty Collected: 0.544[<sup>2</sup>](#table1)
- Opponent Network: 0.249[<sup>2</sup>](#table1)
- LAN Wins: 0.709[<sup>2</sup>](#table1)

The average of these factors is 0.524<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1425.3
- 400 + ( ( 0.524 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1425.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       33 | 2024-09-17 | The MongolZ     | L   | 1.000      | -            | -                | -                | -         |    -4.38 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           43 |      141 | 2024-09-13 | Complexity      | W   | 1.000      | 0.889        | 0.337 (0.299)    | 0.449 (0.399)    | 1 (1.000) |    26.33 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           42 |      171 | 2024-09-12 | fnatic          | W   | 1.000      | 0.889        | 0.321 (0.285)    | 0.660 (0.587)    | 1 (1.000) |    15.11 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           41 |      211 | 2024-09-11 | Rooster         | W   | 1.000      | 0.889        | 0.019 (0.017)    | 0.323 (0.287)    | 1 (1.000) |     1.47 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           40 |      237 | 2024-09-10 | Imperial        | L   | 1.000      | -            | -                | -                | -         |   -19.21 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           39 |      762 | 2024-08-26 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -29.24 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           38 |      815 | 2024-08-24 | Virtus.pro      | L   | 1.000      | -            | -                | -                | -         |    -5.88 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           37 |      836 | 2024-08-23 | GamerLegion     | W   | 1.000      | 0.535        | 0.233 (0.125)    | 0.639 (0.342)    | -         |     6.49 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           36 |      848 | 2024-08-23 | Permitta        | W   | 1.000      | 0.143        | -                | 0.979 (0.140)    | -         |     2.65 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           35 |      888 | 2024-08-22 | Qiang           | W   | 1.000      | -            | -                | -                | -         |     2.52 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           34 |      914 | 2024-08-21 | Insilio         | W   | 1.000      | 0.143        | -                | 0.799 (0.114)    | -         |     2.05 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           33 |      968 | 2024-08-21 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -25.93 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           32 |     1291 | 2024-08-09 | Falcons         | L   | 0.934      | -            | -                | -                | -         |    -9.71 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           31 |     1323 | 2024-08-08 | SAW             | L   | 0.926      | -            | -                | -                | -         |   -13.40 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           30 |     1376 | 2024-08-07 | FlyQuest        | W   | 0.919      | -            | -                | -                | 1 (0.919) |     2.90 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           29 |     1530 | 2024-08-02 | Natus Vincere   | L   | 0.888      | -            | -                | -                | -         |    -1.12 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           28 |     1566 | 2024-08-01 | Virtus.pro      | W   | 0.882      | 0.581        | 0.587 (0.301)    | 0.337 (0.173)    | 1 (0.882) |    23.05 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           27 |     1628 | 2024-07-31 | Natus Vincere   | L   | 0.874      | -            | -                | -                | -         |    -0.87 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           26 |     2511 | 2024-06-15 | Permitta        | L   | 0.565      | -            | -                | -                | -         |   -16.55 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     2537 | 2024-06-14 | Space           | W   | 0.560      | 0.435        | -                | 0.497 (0.121)    | -         |     0.75 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     2866 | 2024-06-06 | fnatic          | L   | 0.508      | -            | -                | -                | -         |    -9.12 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     2898 | 2024-06-06 | Eternal Fire    | L   | 0.506      | -            | -                | -                | -         |    -1.15 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     2929 | 2024-06-05 | BetBoom         | L   | 0.501      | -            | -                | -                | -         |   -11.87 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     2943 | 2024-06-05 | Complexity      | L   | 0.500      | -            | -                | -                | -         |    -2.33 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     2953 | 2024-06-05 | FURIA           | W   | 0.499      | 0.715        | 0.385 (0.137)    | 0.583 (0.208)    | 1 (0.499) |    12.74 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     3135 | 2024-05-29 | HEROIC          | L   | 0.456      | -            | -                | -                | -         |    -4.96 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           18 |     3145 | 2024-05-29 | Virtus.pro      | W   | 0.455      | 0.624        | 0.587 (0.167)    | -                | 1 (0.455) |    11.61 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           17 |     3162 | 2024-05-28 | FlyQuest        | W   | 0.449      | 0.624        | 0.109 (0.031)    | -                | 1 (0.449) |     1.51 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           16 |     3186 | 2024-05-27 | Natus Vincere   | L   | 0.442      | -            | -                | -                | -         |    -0.53 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           15 |     3381 | 2024-05-20 | MIBR            | L   | 0.393      | -            | -                | -                | -         |    -6.23 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           14 |     3400 | 2024-05-19 | Astralis        | L   | 0.388      | -            | -                | -                | -         |    -4.11 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           13 |     3776 | 2024-05-07 | G2              | L   | 0.307      | -            | -                | -                | -         |    -0.46 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           12 |     3838 | 2024-05-03 | HEROIC          | W   | 0.281      | 0.889        | 0.282 (0.071)    | 0.458 (0.115)    | 1 (0.281) |     5.76 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           11 |     3847 | 2024-05-03 | Qiang           | W   | 0.280      | -            | -                | -                | 1 (0.280) |     0.40 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           10 |     3874 | 2024-05-02 | Natus Vincere   | L   | 0.273      | -            | -                | -                | -         |    -0.31 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            9 |     3899 | 2024-05-01 | BOSS            | W   | 0.266      | -            | -                | -                | -         |     0.26 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            8 |     4110 | 2024-04-21 | BLEED           | L   | 0.200      | -            | -                | -                | -         |    -6.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            7 |     4136 | 2024-04-20 | GamerLegion     | W   | 0.194      | 0.384        | 0.233 (0.017)    | -                | -         |     0.87 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            6 |     4246 | 2024-04-18 | LEON            | W   | 0.179      | -            | -                | -                | -         |     0.08 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            5 |     4355 | 2024-04-13 | OG              | L   | 0.147      | -            | -                | -                | -         |    -4.28 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            4 |     4364 | 2024-04-12 | FORZE           | W   | 0.141      | -            | -                | -                | -         |     0.12 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            3 |     4435 | 2024-04-10 | Gods Reign      | W   | 0.128      | -            | -                | -                | -         |     0.07 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            2 |     4494 | 2024-04-09 | BetBoom         | L   | 0.120      | -            | -                | -                | -         |    -2.96 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            1 |     4673 | 2024-04-03 | EYEBALLERS      | W   | 0.080      | -            | -                | -                | -         |     0.07 | JDC, Krimbo, prosus, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,478.33)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-18 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-08-25 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-08-09 |      0.935 | $4,500.00      | $4,207.52       |
| 2024-08-04 |      0.900 | $8,500.00      | $7,653.04       |
| 2024-06-16 |      0.574 | $2,000.00      | $1,148.49       |
| 2024-06-09 |      0.527 | $8,000.00      | $4,219.46       |
| 2024-06-02 |      0.482 | $6,000.00      | $2,891.12       |
| 2024-05-12 |      0.341 | $17,500.00     | $5,962.35       |
| 2024-04-14 |      0.154 | $35,000.00     | $5,396.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
