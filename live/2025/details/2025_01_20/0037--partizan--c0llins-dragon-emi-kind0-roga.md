### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [37](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [27]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1171.8<br />
<br />
Final Rank Value (1171.8) = Starting Rank Value (1211.8) + Head To Head Adjustments (-40.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.516[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.167[<sup>2</sup>](#table1)
- LAN Wins: 0.568[<sup>2</sup>](#table1)

The average of these factors is 0.409<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1211.8
- 400 + ( ( 0.409 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1211.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      436 | 2024-12-03 | 500               | L   | 0.886      | -            | -                | -                | -         |   -18.64 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      453 | 2024-12-02 | Arrow             | W   | 0.880      | 0.372        | 0.027 (0.009)    | 0.163 (0.053)    | 0 (0.000) |     3.61 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      500 | 2024-11-30 | UNiTY             | W   | 0.866      | 0.372        | 0.070 (0.023)    | 0.279 (0.090)    | 0 (0.000) |     5.05 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      532 | 2024-11-29 | CYBERSHOKE        | L   | 0.859      | -            | -                | -                | -         |   -23.59 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |      561 | 2024-11-27 | Lazer Cats        | W   | 0.845      | -            | -                | -                | 0 (0.000) |     1.18 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |      745 | 2024-11-17 | Metizport         | W   | 0.778      | 0.617        | 0.182 (0.088)    | 0.793 (0.381)    | 1 (0.778) |    14.56 | c0llins, choiv7, Dragon, emi, Kind0 |
|           15 |      752 | 2024-11-17 | PEGADA            | L   | 0.777      | -            | -                | -                | -         |   -12.59 | c0llins, choiv7, Dragon, emi, Kind0 |
|           14 |      773 | 2024-11-16 | los kogutos       | W   | 0.772      | 0.617        | 0.071 (0.034)    | 0.836 (0.398)    | 1 (0.772) |     6.34 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |      801 | 2024-11-15 | Kitsune           | W   | 0.764      | -            | -                | -                | 1 (0.764) |     0.58 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |      806 | 2024-11-15 | SINNERS Academy   | L   | 0.764      | -            | -                | -                | -         |   -21.98 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |      817 | 2024-11-14 | Czech Republic    | W   | 0.760      | 0.617        | -                | 0.116 (0.054)    | 1 (0.760) |     1.34 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |      861 | 2024-11-13 | The Huns          | W   | 0.752      | 0.617        | 0.056 (0.026)    | 0.359 (0.167)    | 1 (0.752) |     5.73 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |      866 | 2024-11-13 | Dusty Roots       | W   | 0.752      | 0.617        | 0.016 (0.007)    | 0.352 (0.164)    | 1 (0.752) |     2.33 | c0llins, choiv7, Dragon, emi, Kind0 |
|            8 |     1765 | 2024-10-03 | Johnny Speeds     | L   | 0.479      | -            | -                | -                | -         |   -11.06 | c0llins, Dragon, emi, Kind0, ROGA   |
|            7 |     1768 | 2024-10-03 | GUN5              | W   | 0.479      | 0.384        | 0.225 (0.041)    | 1.000 (0.184)    | 0 (0.000) |     5.02 | c0llins, Dragon, emi, Kind0, ROGA   |
|            6 |     1812 | 2024-10-02 | Insilio           | W   | 0.471      | 0.384        | -                | 0.296 (0.054)    | -         |     1.71 | c0llins, Dragon, emi, Kind0, ROGA   |
|            5 |     1859 | 2024-10-01 | UNiTY             | W   | 0.464      | 0.333        | 0.070 (0.011)    | -                | -         |     2.77 | c0llins, Dragon, emi, Kind0, ROGA   |
|            4 |     2247 | 2024-09-20 | Aurora Young Blud | W   | 0.392      | 0.384        | 0.045 (0.007)    | 0.837 (0.126)    | -         |     2.19 | c0llins, Dragon, emi, Kind0, ROGA   |
|            3 |     2401 | 2024-09-15 | los kogutos       | L   | 0.358      | -            | -                | -                | -         |    -6.62 | c0llins, Dragon, emi, Kind0, ROGA   |
|            2 |     2630 | 2024-09-07 | ex-Enterprise     | W   | 0.305      | -            | -                | -                | -         |     1.17 | Dragon, emi, Kind0, ROGA, xicoz     |
|            1 |     2816 | 2024-09-01 | Rebels            | W   | 0.264      | 0.384        | 0.034 (0.003)    | -                | -         |     0.88 | c0llins, Dragon, emi, Kind0, ROGA   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,455.06)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.779 | $25,000.00     | $19,472.94      |
| 2024-10-03 |      0.479 | $12,500.00     | $5,982.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
