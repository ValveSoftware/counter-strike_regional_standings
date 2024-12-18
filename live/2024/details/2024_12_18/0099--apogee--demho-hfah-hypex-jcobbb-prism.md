### Roster Details<br />
Team Name: Apogee<br />
Roster: Demho, hfah, hypex, jcobbb, Prism<br />
Global Rank: [99](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [73]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  870.3<br />
<br />
Final Rank Value (870.3) = Starting Rank Value (814.7) + Head To Head Adjustments (55.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.7
- 400 + ( ( 0.216 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 814.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      108 | 2024-12-12 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -11.18 | Demho, hfah, hypex, jcobbb, Prism |
|           15 |      123 | 2024-12-11 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |    -7.02 | Demho, hfah, hypex, jcobbb, Prism |
|           14 |      142 | 2024-12-09 | Gaimin Gladiators | W   | 1.000      | 0.371        | 0.063 (0.023)    | 0.931 (0.345)    | 0 (0.000) |    19.67 | Demho, hfah, hypex, jcobbb, Prism |
|           13 |      237 | 2024-12-05 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -11.53 | Demho, hfah, hypex, jcobbb, Prism |
|           12 |      309 | 2024-12-02 | Anonymo           | L   | 1.000      | -            | -                | -                | -         |   -20.32 | Demho, hfah, hypex, jcobbb, Prism |
|           11 |      329 | 2024-12-01 | Sampi             | W   | 1.000      | 0.371        | 0.037 (0.014)    | 0.426 (0.158)    | 0 (0.000) |    18.10 | Demho, hfah, hypex, jcobbb, Prism |
|           10 |      346 | 2024-11-30 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -9.39 | Demho, hfah, hypex, jcobbb, Prism |
|            9 |      355 | 2024-11-30 | kONO              | W   | 1.000      | 0.333        | 0.013 (0.004)    | 0.386 (0.129)    | 0 (0.000) |    13.84 | Demho, hfah, hypex, jcobbb, Prism |
|            8 |      378 | 2024-11-29 | WOPA              | W   | 1.000      | 0.354        | 0.027 (0.010)    | 0.286 (0.101)    | 0 (0.000) |    14.69 | Demho, hfah, hypex, jcobbb, Prism |
|            7 |      388 | 2024-11-29 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -15.75 | Demho, hfah, hypex, jcobbb, Prism |
|            6 |      407 | 2024-11-27 | Gaimin Gladiators | W   | 1.000      | 0.354        | 0.063 (0.022)    | 0.931 (0.330)    | 0 (0.000) |    22.00 | Demho, hfah, hypex, jcobbb, Prism |
|            5 |      411 | 2024-11-27 | GUN5              | W   | 1.000      | 0.354        | 0.162 (0.057)    | 1.000 (0.354)    | 0 (0.000) |    25.64 | Demho, hfah, hypex, jcobbb, Prism |
|            4 |      415 | 2024-11-27 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -8.55 | Demho, hfah, hypex, jcobbb, Prism |
|            3 |      429 | 2024-11-26 | Astralis Talent   | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.339 (0.113)    | 0 (0.000) |    12.18 | Demho, hfah, hypex, jcobbb, Prism |
|            2 |      440 | 2024-11-25 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -10.25 | Demho, hfah, hypex, jcobbb, Prism |
|            1 |      510 | 2024-11-22 | Gaimin Gladiators | W   | 1.000      | 0.333        | 0.063 (0.021)    | 0.931 (0.310)    | 0 (0.000) |    23.45 | Demho, hfah, hypex, jcobbb, Prism |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
