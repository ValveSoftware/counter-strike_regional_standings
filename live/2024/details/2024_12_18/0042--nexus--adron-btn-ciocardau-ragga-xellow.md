### Roster Details<br />
Team Name: Nexus<br />
Roster: ADRON, BTN, Ciocardau, ragga, XELLOW<br />
Global Rank: [42](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [31]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1156.0<br />
<br />
Final Rank Value (1156.0) = Starting Rank Value (1478.4) + Head To Head Adjustments (-322.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.672[<sup>1</sup>](#table2)
- Bounty Collected: 0.402[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.908[<sup>2</sup>](#table1)

The average of these factors is 0.563<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1478.4
- 400 + ( ( 0.563 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1478.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |        0 | 2024-12-18 | Insilio           | W   | 1.000      | 0.354        | -                | 0.334 (0.118)    | 0 (0.000) |     4.02 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           65 |        4 | 2024-12-18 | Illuminar         | W   | 1.000      | 0.354        | -                | 0.509 (0.180)    | -         |     4.90 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           64 |       37 | 2024-12-15 | aimclub           | L   | 1.000      | -            | -                | -                | -         |   -25.59 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           63 |       67 | 2024-12-14 | Perfect Storm     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.78 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           62 |      356 | 2024-11-30 | Lazer Cats        | W   | 1.000      | -            | -                | -                | -         |     1.53 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           61 |      394 | 2024-11-28 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -24.13 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           60 |      421 | 2024-11-26 | UNiTY             | W   | 1.000      | 0.372        | 0.059 (0.022)    | 0.305 (0.113)    | -         |     5.90 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           59 |      590 | 2024-11-17 | Rhyno             | W   | 0.993      | 0.617        | 0.152 (0.093)    | 0.532 (0.326)    | 1 (0.993) |    11.27 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           58 |      598 | 2024-11-17 | Metizport         | W   | 0.992      | 0.617        | 0.128 (0.078)    | 0.843 (0.516)    | 1 (0.992) |    17.99 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           57 |      617 | 2024-11-16 | ALTERNATE aTTaX   | W   | 0.987      | 0.617        | 0.071 (0.043)    | 0.786 (0.479)    | 1 (0.987) |     9.08 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           56 |      636 | 2024-11-15 | USA               | W   | 0.979      | -            | -                | -                | 1 (0.979) |     0.66 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           55 |      642 | 2024-11-15 | Latvia            | W   | 0.979      | -            | -                | -                | 1 (0.979) |     2.60 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           54 |      677 | 2024-11-14 | Tunisia           | W   | 0.973      | 0.617        | 0.015 (0.009)    | -                | 1 (0.973) |     2.83 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           53 |      679 | 2024-11-14 | kONO              | W   | 0.973      | 0.617        | -                | 0.386 (0.232)    | 1 (0.973) |     6.33 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           52 |      685 | 2024-11-14 | QPT               | L   | 0.973      | -            | -                | -                | -         |   -14.37 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           51 |     1070 | 2024-10-27 | HyperSpirit       | W   | 0.853      | -            | -                | -                | 1 (0.853) |     1.52 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           50 |     1100 | 2024-10-26 | Johnny Speeds     | L   | 0.846      | -            | -                | -                | -         |   -16.98 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           49 |     1190 | 2024-10-20 | suxeN             | W   | 0.806      | -            | -                | -                | -         |     0.73 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           48 |     1213 | 2024-10-19 | los kogutos       | W   | 0.800      | 0.354        | 0.063 (0.018)    | 0.981 (0.278)    | -         |     8.27 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           47 |     1352 | 2024-10-13 | ECSTATIC          | L   | 0.758      | -            | -                | -                | -         |   -17.22 | ADRON, BTN, Ciocardau, ragga, XELLOW   |
|           46 |     1658 | 2024-10-02 | los kogutos       | L   | 0.685      | -            | -                | -                | -         |   -15.15 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           45 |     1783 | 2024-09-28 | EYEBALLERS        | L   | 0.661      | -            | -                | -                | -         |   -19.21 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           44 |     1797 | 2024-09-28 | Gaimin Gladiators | W   | 0.658      | 0.354        | 0.063 (0.015)    | 0.931 (0.217)    | -         |     4.44 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           43 |     1830 | 2024-09-27 | G2 Ares           | L   | 0.653      | -            | -                | -                | -         |   -19.99 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           42 |     1870 | 2024-09-26 | SovvyKiNG         | W   | 0.647      | -            | -                | -                | -         |     0.82 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           41 |     2028 | 2024-09-23 | Zero Tenacity     | L   | 0.626      | -            | -                | -                | -         |   -13.22 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           40 |     2071 | 2024-09-21 | 9 Pandas          | W   | 0.613      | 0.435        | 0.098 (0.026)    | 0.871 (0.232)    | -         |     6.71 | BTN, Ciocardau, ERSIN, ragga, XELLOW   |
|           39 |     2079 | 2024-09-21 | DMS               | L   | 0.612      | -            | -                | -                | -         |   -18.07 | BTN, Ciocardau, ERSIN, ragga, XELLOW   |
|           38 |     2106 | 2024-09-20 | GenOne            | L   | 0.605      | -            | -                | -                | -         |   -17.95 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           37 |     2137 | 2024-09-19 | DMS               | L   | 0.599      | -            | -                | -                | -         |   -18.02 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           36 |     2140 | 2024-09-19 | EYEBALLERS        | W   | 0.598      | -            | -                | -                | -         |     0.99 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           35 |     2210 | 2024-09-17 | Lynn Vision       | L   | 0.584      | -            | -                | -                | -         |   -15.85 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           34 |     2252 | 2024-09-15 | Endpoint          | L   | 0.572      | -            | -                | -                | -         |   -16.09 | 7kick, Ciocardau, ERSIN, ragga, XELLOW |
|           33 |     2269 | 2024-09-14 | QUAZAR            | W   | 0.567      | -            | -                | -                | -         |     0.56 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           32 |     2303 | 2024-09-13 | Alliance          | W   | 0.561      | -            | -                | -                | -         |     1.65 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           31 |     2339 | 2024-09-12 | RUSH B            | W   | 0.553      | 0.384        | 0.042 (0.009)    | -                | -         |     1.17 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           30 |     2352 | 2024-09-12 | BOGATYRI          | W   | 0.552      | -            | -                | -                | -         |     0.10 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           29 |     2369 | 2024-09-11 | Kosovo            | L   | 0.547      | -            | -                | -                | -         |   -16.96 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           28 |     2555 | 2024-09-05 | Aurora Young Blud | L   | 0.505      | -            | -                | -                | -         |   -14.62 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           27 |     2665 | 2024-09-01 | Spirit Academy    | L   | 0.479      | -            | -                | -                | -         |   -13.36 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           26 |     2678 | 2024-08-31 | los kogutos       | L   | 0.472      | -            | -                | -                | -         |   -11.95 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           25 |     2704 | 2024-08-30 | Zero Tenacity     | L   | 0.465      | -            | -                | -                | -         |   -12.54 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           24 |     3186 | 2024-08-19 | Sampi             | L   | 0.393      | -            | -                | -                | -         |   -11.20 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           23 |     3188 | 2024-08-19 | Aurora Young Blud | L   | 0.392      | -            | -                | -                | -         |   -11.42 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           22 |     3224 | 2024-08-17 | RUBY              | L   | 0.380      | -            | -                | -                | -         |   -11.85 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           21 |     3247 | 2024-08-16 | Revenant          | L   | 0.373      | -            | -                | -                | -         |   -11.36 | 7kick, BTN, ragga, welnic, XELLOW      |
|           20 |     3300 | 2024-08-14 | SovvyKiNG         | W   | 0.361      | -            | -                | -                | -         |     0.11 | 7kick, BTN, ragga, welnic, XELLOW      |
|           19 |     3385 | 2024-08-12 | Verdant           | W   | 0.347      | -            | -                | -                | -         |     0.54 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           18 |     3397 | 2024-08-12 | ALTERNATE aTTaX   | W   | 0.345      | -            | -                | -                | -         |     1.76 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           17 |     3500 | 2024-08-08 | DASH              | L   | 0.318      | -            | -                | -                | -         |    -9.84 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           16 |     3536 | 2024-08-07 | ECLOT             | W   | 0.312      | 0.143        | 0.230 (0.010)    | -                | -         |     4.24 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           15 |     3584 | 2024-08-06 | 1WIN              | L   | 0.305      | -            | -                | -                | -         |    -9.45 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           14 |     3805 | 2024-07-31 | EYEBALLERS        | W   | 0.265      | -            | -                | -                | -         |     0.19 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           13 |     3873 | 2024-07-29 | Passion UA        | L   | 0.252      | -            | -                | -                | -         |    -6.27 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           12 |     4004 | 2024-07-25 | kONO              | L   | 0.225      | -            | -                | -                | -         |    -6.81 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           11 |     4148 | 2024-07-20 | Johnny Speeds     | L   | 0.193      | -            | -                | -                | -         |    -5.45 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|           10 |     4191 | 2024-07-19 | Qiang             | W   | 0.186      | -            | -                | -                | -         |     0.07 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|            9 |     4232 | 2024-07-18 | TSM               | W   | 0.180      | -            | -                | -                | -         |     0.27 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|            8 |     4248 | 2024-07-18 | Rhyno             | L   | 0.179      | -            | -                | -                | -         |    -4.38 | 7kick, BTN, Ciocardau, Ed1m, ragga     |
|            7 |     4325 | 2024-07-17 | ALTERNATE aTTaX   | L   | 0.172      | -            | -                | -                | -         |    -4.65 | 7kick, BTN, Ed1m, ragga, XELLOW        |
|            6 |     4360 | 2024-07-16 | Ninjas in Pyjamas | L   | 0.167      | -            | -                | -                | -         |    -4.48 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|            5 |     4419 | 2024-07-15 | SINNERS           | W   | 0.159      | -            | -                | -                | -         |     0.70 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|            4 |     4430 | 2024-07-14 | kONO              | L   | 0.154      | -            | -                | -                | -         |    -4.69 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|            3 |     4450 | 2024-07-13 | Partizan          | W   | 0.146      | -            | -                | -                | -         |     0.90 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|            2 |     4491 | 2024-07-10 | kONO              | L   | 0.127      | -            | -                | -                | -         |    -3.88 | 7kick, BTN, Ciocardau, ragga, XELLOW   |
|            1 |     4523 | 2024-07-09 | Belarus           | W   | 0.119      | -            | -                | -                | -         |     0.01 | 7kick, BTN, Ciocardau, ragga, XELLOW   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($112,385.27)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $7,912.00      | $7,912.00       |
| 2024-11-17 |      0.993 | $100,000.00    | $99,341.02      |
| 2024-10-27 |      0.853 | $5,447.00      | $4,648.79       |
| 2024-07-20 |      0.193 | $2,500.00      | $483.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
