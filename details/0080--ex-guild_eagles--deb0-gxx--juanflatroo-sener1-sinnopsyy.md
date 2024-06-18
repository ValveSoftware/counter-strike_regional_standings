### Roster Details<br />
Team Name: ex-Guild Eagles<br />
Roster: deb0, gxx-, juanflatroo, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  953.2<br />
<br />
Final Rank Value (953.2) = Starting Rank Value (926.3) + Head To Head Adjustments (26.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.131[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 926.3
- 400 + ( ( 0.259 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 926.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |      183 | 2024-06-11 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -12.81 | deb0, gxx-, juanflatroo, SENER1, sinnopsyy    |
|           47 |      782 | 2024-05-25 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -9.03 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           46 |      793 | 2024-05-25 | The Suspect       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.07 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           45 |      800 | 2024-05-24 | Zero Tenacity     | W   | 1.000      | 0.273        | 0.153 (0.042)    | 1.000 (0.273)    | 0 (0.000) |    22.68 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           44 |      805 | 2024-05-24 | ex-iNation        | W   | 1.000      | 0.273        | 0.017 (0.005)    | 0.178 (0.048)    | 0 (0.000) |    10.00 | aidKiT, c0llins, Dragon, emi, xicoz           |
|           43 |     1037 | 2024-05-17 | Sashi             | L   | 0.987      | -            | -                | -                | -         |    -4.08 | Cabbi, IceBerg, kwezz, Lucky, MistR           |
|           42 |     1379 | 2024-05-05 | 1WIN              | L   | 0.907      | -            | -                | -                | -         |   -11.80 | buster, Jyo, lattykk, neaLaN, Ryujin          |
|           41 |     1491 | 2024-04-29 | EYEBALLERS        | L   | 0.869      | -            | -                | -                | -         |   -14.53 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           40 |     1532 | 2024-04-27 | Insilio           | L   | 0.856      | -            | -                | -                | -         |   -12.08 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           39 |     1560 | 2024-04-26 | BLEED             | L   | 0.849      | -            | -                | -                | -         |    -2.69 | CeRq, CYPHER, faveN, hampus, VLDN             |
|           38 |     1592 | 2024-04-25 | PARIVISION        | L   | 0.842      | -            | -                | -                | -         |   -13.18 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           37 |     1618 | 2024-04-24 | Zero Tenacity     | W   | 0.834      | 0.435        | 0.153 (0.056)    | 1.000 (0.363)    | 0 (0.000) |    15.81 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           36 |     1644 | 2024-04-22 | 3DMAX             | L   | 0.823      | -            | -                | -                | -         |    -5.06 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           35 |     1656 | 2024-04-22 | Sangal            | W   | 0.820      | 0.435        | 0.216 (0.077)    | 0.884 (0.315)    | 0 (0.000) |    18.29 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr         |
|           34 |     1769 | 2024-04-18 | Sashi             | L   | 0.796      | -            | -                | -                | -         |    -7.39 | Cabbi, IceBerg, kwezz, Lucky, MistR           |
|           33 |     1778 | 2024-04-18 | KOI               | W   | 0.796      | 0.143        | 0.077 (0.009)    | 0.508 (0.058)    | 0 (0.000) |    19.61 | adamS, dav1g, JUST, mopoz, stadodo            |
|           32 |     1788 | 2024-04-18 | FRAGMATIC         | W   | 0.795      | -            | -                | -                | 0 (0.000) |     1.10 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           31 |     1794 | 2024-04-18 | AMKAL             | L   | 0.795      | -            | -                | -                | -         |    -5.19 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           30 |     1862 | 2024-04-16 | Sashi             | W   | 0.782      | 0.384        | 0.200 (0.060)    | 1.000 (0.300)    | -         |    17.97 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           29 |     2056 | 2024-04-09 | Metizport         | W   | 0.735      | 0.384        | 0.073 (0.021)    | 0.587 (0.166)    | -         |    15.85 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           28 |     2222 | 2024-04-03 | AMKAL             | L   | 0.695      | -            | -                | -                | -         |    -4.65 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           27 |     2254 | 2024-04-02 | Insilio           | L   | 0.690      | -            | -                | -                | -         |    -9.40 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           26 |     2266 | 2024-04-02 | AMKAL             | W   | 0.688      | 0.143        | 0.139 (0.014)    | 0.613 (0.060)    | -         |    17.04 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           25 |     2272 | 2024-04-02 | 500               | L   | 0.687      | -            | -                | -                | -         |   -14.27 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2278 | 2024-04-01 | 500               | W   | 0.683      | 0.384        | -                | 0.292 (0.077)    | -         |     7.33 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2358 | 2024-03-27 | ALTERNATE aTTaX   | L   | 0.649      | -            | -                | -                | -         |    -8.17 | ArroW, awzek, FreeZe, hyped, skyye            |
|           22 |     2427 | 2024-03-22 | VP.Prodigy        | L   | 0.614      | -            | -                | -                | -         |   -10.87 | dwushka, KusMe, shady, Something, xdENiSZERA  |
|           21 |     2967 | 2024-02-27 | Lotus             | L   | 0.456      | -            | -                | -                | -         |   -13.27 | Consume, Maki, rbfurious, ROGA, Šego          |
|           20 |     2976 | 2024-02-27 | Metizport         | W   | 0.456      | 0.143        | 0.073 (0.005)    | -                | -         |     8.06 | adamb, Jackinho, nilo, susp, ztr              |
|           19 |     3057 | 2024-02-24 | GamerLegion       | L   | 0.434      | -            | -                | -                | -         |    -3.98 | acoR, isak, Keoz, Snax, volt                  |
|           18 |     3064 | 2024-02-23 | BetBoom           | W   | 0.428      | 0.143        | 0.414 (0.025)    | 0.798 (0.049)    | 1 (0.428) |    13.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           17 |     3082 | 2024-02-22 | Gaimin Gladiators | L   | 0.422      | -            | -                | -                | -         |    -2.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           16 |     3101 | 2024-02-21 | ex-Preasy         | W   | 0.416      | -            | -                | -                | 1 (0.416) |     6.31 | Altekz, dupreeh, refrezh, roeJ, TMB           |
|           15 |     3135 | 2024-02-20 | Nexus             | W   | 0.408      | -            | -                | -                | 1 (0.408) |     5.42 | BTN, ERSIN, ragga, s0und, XELLOW              |
|           14 |     3159 | 2024-02-19 | ENCE              | L   | 0.402      | -            | -                | -                | -         |    -0.39 | dycha, gla1ve, Goofy, hades, Kylar            |
|           13 |     3168 | 2024-02-19 | MOUZ              | L   | 0.401      | -            | -                | -                | -         |    -0.03 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           12 |     3388 | 2024-02-08 | Insilio           | L   | 0.330      | -            | -                | -                | -         |    -4.95 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           11 |     3391 | 2024-02-08 | RUBY              | L   | 0.329      | -            | -                | -                | -         |    -4.58 | dekz, Kaide, mo0N, sowalio, w1nt3r            |
|           10 |     3634 | 2024-01-25 | PERA              | L   | 0.237      | -            | -                | -                | -         |    -3.26 | Aaron, DGL, Kamion, msN, Porya                |
|            9 |     3649 | 2024-01-24 | ALTERNATE aTTaX   | W   | 0.229      | -            | -                | -                | -         |     4.66 | awzek, FreeZe, Goody, PANIX, PerX             |
|            8 |     3670 | 2024-01-23 | Sampi             | W   | 0.222      | -            | -                | -                | -         |     3.52 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            7 |     3673 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.222      | -            | -                | -                | -         |     4.66 | awzek, FreeZe, Goody, PANIX, PerX             |
|            6 |     3694 | 2024-01-22 | PERA              | L   | 0.216      | -            | -                | -                | -         |    -3.00 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            5 |     3696 | 2024-01-22 | Viperio           | W   | 0.216      | -            | -                | -                | -         |     0.59 | mAnGo, MMS, pandi7o, ReegaN, zodi             |
|            4 |     3701 | 2024-01-22 | Rebels            | W   | 0.215      | -            | -                | -                | -         |     4.91 | casey, Flayy, kisserek, olimp, sNx            |
|            3 |     3900 | 2024-01-18 | Sprout            | W   | 0.187      | -            | -                | -                | -         |     0.45 | Anlelele, cej0t, raalz, sL1m3, Zyphon         |
|            2 |     3917 | 2024-01-17 | Into the Breach   | W   | 0.184      | -            | -                | -                | -         |     1.25 | Bymas, CRUC1AL, misutaaa, rallen, Thomas      |
|            1 |     3923 | 2024-01-17 | Capcarap          | W   | 0.184      | -            | -                | -                | -         |     0.29 | darien, Maki, rbfurious, simon, zeins         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,153.98)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-24 |      1.000 | $2,158.00      | $2,158.00       |
| 2024-05-18 |      0.996 | $1,000.00      | $995.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
